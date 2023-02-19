import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/user.entitiy';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { BcryptService } from 'src/auth/services/bcrypt.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, BcryptService],
})
export class UsersModule {}
