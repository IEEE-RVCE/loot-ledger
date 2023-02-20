import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { Repository } from 'typeorm';

import jwtConfig from '../../common/config/jwt.config';
import { MysqlErrorCode } from '../../common/enums/error-codes.enum';
import { ActiveUserData } from '../../common/interfaces/active-user-data.interface';
import { RedisService } from '../../redis/redis.service';
import { User } from '../../users/entities/user.entitiy';
import { BcryptService } from './bcrypt.service';
import { SignInDto } from '../dto/sign-in.dto';
import { SignUpDto } from '../dto/sign-up.dto';
import { MemberOf } from 'src/society/entities/member.entitiy';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly bcryptService: BcryptService,
    private readonly jwtService: JwtService,
    private readonly redisService: RedisService,
    private readonly userService: UsersService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<void> {
    const { password, passwordConfirm, ...userParams } = signUpDto;
    await this.userService.createUser({ ...userParams, password });
  }

  async signIn(signInDto: SignInDto): Promise<{ accessToken: string }> {
    const { email, password } = signInDto;

    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      throw new BadRequestException('Invalid email');
    }

    const isPasswordMatch = await this.bcryptService.compare(
      password,
      user.password,
    );
    if (!isPasswordMatch) {
      throw new BadRequestException('Invalid password');
    }

    const tokenId = randomUUID();

    await this.redisService.insert(`user-${user.id}`, tokenId);

    const accessToken = await this.jwtService.signAsync(
      {
        id: user.id,
        email: user.email,
        tokenId,
        role: user.role,
      } as ActiveUserData,
      {
        secret: this.jwtConfiguration.secret,
        expiresIn: '15m',
      },
    );

    return { accessToken };
  }

  async signOut(userId: string): Promise<void> {
    this.redisService.delete(`user-${userId}`);
  }
}
