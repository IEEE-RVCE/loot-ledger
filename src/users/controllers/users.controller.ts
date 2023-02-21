import { Controller, Delete, Get, Put, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { Role } from 'src/common/types/common.types';
import { ActiveUser } from '../../common/decorators/active-user.decorator';

import { User } from '../entities/user.entitiy';
import { UsersService } from '../services/users.service';

@ApiTags('user')
@Controller('user')
@UseGuards(JwtAuthGuard, RoleGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiOkResponse({ description: "Get logged in user's details", type: User })
  @ApiBearerAuth()
  @Get('me')
  async getMe(@ActiveUser('id') userId: string): Promise<User> {
    return this.usersService.getMe(userId);
  }

  @Roles(Role.SUPER_ADMIN)
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiOkResponse({
    description: 'Get All Users',
    type: Array<User>,
    isArray: true,
  })
  @ApiBearerAuth()
  @Get('all')
  async getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsersFromDb();
  }

  // TODO Implement update user service
  @Put('')
  async updateUser(): Promise<User> {
    return null;
  }

  // TODO Implement delete user service
  @Delete('')
  async deleteUser(): Promise<User> {
    return null;
  }
}
