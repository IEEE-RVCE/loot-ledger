import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BcryptService } from 'src/auth/services/bcrypt.service';
import { MysqlErrorCode } from 'src/common/enums/error-codes.enum';
import { Repository } from 'typeorm';
import { userParams } from '../dtos/create-user.dto';

import { User } from '../entities/user.entitiy';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly bcryptService: BcryptService,
  ) {}

  async getMe(userId: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return user;
  }

  async getAllUsersFromDb(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(userDeets: userParams): Promise<User> {
    try {
      const user = new User();
      user.password = await this.bcryptService.hash(userDeets.password);
      Object.assign(user, user);
      return await this.userRepository.save(user);
    } catch (error) {
      if (error.code === MysqlErrorCode.UniqueViolation) {
        throw new ConflictException(`User [${userDeets.email}] already exist`);
      }
      throw error;
    }
  }

  async getUserByEmail(email: string): Promise<User> {
    return await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.memberOf', 'memberOf')
      .where('user.email = :email', { email: email })
      .getOne();
  }
}
