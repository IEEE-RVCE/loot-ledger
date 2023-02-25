import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MysqlErrorCode } from 'src/common/enums/error-codes.enum';
import { SocietyMember } from 'src/common/types/common.types';
import { User } from 'src/users/entities/user.entitiy';
import { UsersService } from 'src/users/services/users.service';
import { Repository } from 'typeorm';
import { addMemberSocietyDto } from '../dto/create-member.dto';
import { createSocietyDto } from '../dto/create-society.dto';
import { MemberOf } from '../entities/member.entitiy';
import { Society } from '../entities/society.entitiy';

@Injectable()
export class SocietyService {
  constructor(
    @InjectRepository(Society)
    private readonly societyRepository: Repository<Society>,
  ) {}

  async createSociety(society: createSocietyDto): Promise<Society> {
    try {
      const user = new Society();
      Object.assign(user, society);
      return await this.societyRepository.save(user);
    } catch (error) {
      if (error.code === MysqlErrorCode.UniqueViolation) {
        throw new ConflictException(`Society [${society.name}] already exist`);
      }
      throw error;
    }
  }

  async getSocietyById(id: string): Promise<Society | null> {
    return await this.societyRepository.findOne({
      where: {
        id,
      },
    });
  }

  async getSocietyByName(name: string): Promise<Society | null> {
    return await this.societyRepository.findOne({
      where: {
        name,
      },
    });
  }

  async getAllSocieties(): Promise<Society[]> {
    return await this.societyRepository.find();
  }

  /**
   * @description Links Member to Society with the given details such as position, tenureStart, tenureEnd
   *
   */
  async addMemberToSociety(memDeets: addMemberSocietyDto): Promise<MemberOf> {
    const { sid, uid, ...restDeets } = memDeets;

    // * Running all the queries in a single transaction
    return await this.societyRepository.manager.transaction(
      async (transactionalEntityManager) => {
        const user = await transactionalEntityManager
          .getRepository(User)
          .findOneBy({
            id: uid,
          });

        if (!user) {
          throw new HttpException(
            `User Id[${uid}] doesn't exist`,
            HttpStatus.NOT_FOUND,
          );
        }
        const society = await transactionalEntityManager
          .getRepository(Society)
          .findOneBy({
            id: sid,
          });

        if (!society) {
          throw new HttpException(
            `Society Id [${sid}] doesn't exist`,
            HttpStatus.NOT_FOUND,
          );
        }

        const member = new MemberOf();

        member.society = society;
        member.user = user;
        member.position = restDeets.position;
        member.tenureStart = restDeets.tenureStart;
        member.tenureEnd = restDeets.tenureEnd;

        // * wrap this under try catch block to catch unique constraint violation
        try {
          return await this.societyRepository.manager.save(member);
        } catch (error) {
          if (error.code === MysqlErrorCode.UniqueViolation) {
            throw new ConflictException(
              `User [${user.name}] already a execom of society [${society.name}]`,
            );
          }
          throw error;
        }
      },
    );
  }

  async getMembersOfSociety(sid: string): Promise<SocietyMember[]> {
    const society = await this.getSocietyById(sid);
    if (!society) {
      throw new HttpException(
        `Society Id [${sid}] doesn't exist`,
        HttpStatus.NOT_FOUND,
      );
    }

    // * This query is custom written to get the members of a society; didnt find a way to do it using typeorm
    const members: SocietyMember[] = await this.societyRepository.manager.query(
      `SELECT member.position AS member_position, member.tenure_start AS member_tenure_start, member.tenure_end AS member_tenure_end, user.id AS user_id, user.name AS user_name, user.phone AS user_phone, user.type AS user_type, user.department AS user_department, user.isActive AS user_isActive,
        society.id AS society_id, society.name AS society_name
        FROM member_of member
        LEFT JOIN users user ON user.id=member.userId
        LEFT JOIN socities society ON society.id=member.societyId
        WHERE member.societyId = ${sid}`,
    );

    if (!members.length) {
      throw new HttpException(
        `Society [${society.name}] doesn't have any members`,
        HttpStatus.NOT_FOUND,
      );
    }
    return members;
  }
}
