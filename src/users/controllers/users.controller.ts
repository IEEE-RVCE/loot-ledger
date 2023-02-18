import { Controller, Get } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ActiveUser } from '../../common/decorators/active-user.decorator';

import { User } from '../entities/user.entitiy';
import { UsersService } from '../services/users.service';

@ApiTags('user')
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiOkResponse({ description: "Get logged in user's details", type: User })
  @ApiBearerAuth()
  @Get('me')
  async getMe(@ActiveUser('id') userId: string): Promise<User> {
    return this.usersService.getMe(userId);
  }

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
}
