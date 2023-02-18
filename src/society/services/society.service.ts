import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MysqlErrorCode } from 'src/common/enums/error-codes.enum';
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
    private readonly userService: UsersService,
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

  async addMemberToSociety(memDeets: addMemberSocietyDto): Promise<MemberOf> {
    const { sid, uid, ...restDeets } = memDeets;
    const society = await this.getSocietyById(sid);
    const user = await this.userService.getMe(uid);
    if (!society) {
      throw new HttpException(
        `Society Id [${sid}] doesn't exist`,
        HttpStatus.NOT_FOUND,
      );
    }
    if (!user) {
      throw new HttpException(
        `User Id[${uid}] doesn't exist`,
        HttpStatus.NOT_FOUND,
      );
    }
    const member = new MemberOf();

    member.society = society;
    member.user = user;
    member.position = restDeets.position;
    member.tenureStart = restDeets.tenureStart;
    member.tenureEnd = restDeets.tenureEnd;

    // wrap this under try catch block to catch unique constraint violation

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
  }
}
