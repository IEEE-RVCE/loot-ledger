import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberOf } from './entities/member.entitiy';
import { Society } from './entities/society.entitiy';
import { SocietyController } from './controllers/society.controller';
import { SocietyService } from './services/society.service';
import { UsersService } from 'src/users/services/users.service';
import { User } from 'src/users/entities/user.entitiy';

@Module({
  imports: [TypeOrmModule.forFeature([Society, MemberOf, User])],
  controllers: [SocietyController],
  providers: [SocietyService, JwtService, UsersService],
})
export class SocietyModule {}
