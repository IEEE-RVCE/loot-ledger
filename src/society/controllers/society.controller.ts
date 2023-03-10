import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { Role, SocietyMember } from 'src/common/types/common.types';
import { addMemberSocietyDto } from '../dto/create-member.dto';
import { createSocietyDto } from '../dto/create-society.dto';
import { MemberOf } from '../entities/member.entitiy';
import { Society } from '../entities/society.entitiy';
import { SocietyService } from '../services/society.service';

@ApiTags('society')
@Controller('society')
@UseGuards(JwtAuthGuard, RoleGuard)
export class SocietyController {
  constructor(private readonly societyService: SocietyService) {}

  @Roles(Role.SUPER_ADMIN)
  @ApiOkResponse({ description: 'Create Society', type: Society })
  @Post()
  async createSociety(@Body() society: createSocietyDto): Promise<Society> {
    return this.societyService.createSociety(society);
  }

  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiOkResponse({ description: 'Get Society Details', type: Society })
  @ApiBearerAuth()
  @Get('/id/:id')
  async getSocietyById(@Param('id') sid: string): Promise<Society> {
    const soc = await this.societyService.getSocietyById(sid);
    if (!soc) {
      throw new HttpException('Society not found', HttpStatus.NOT_FOUND);
    }
    return soc;
  }

  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiOkResponse({ description: 'Get Society Details', type: Society })
  @ApiBearerAuth()
  @Get('/name/:name')
  async getSocietyByName(@Param('name') name: string): Promise<Society> {
    const soc = await this.societyService.getSocietyByName(
      name.split('_').join(' '),
    );
    if (!soc) {
      throw new HttpException('Society not found', HttpStatus.NOT_FOUND);
    }
    return soc;
  }

  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiOkResponse({
    description: 'Get All Society Details ',
    type: Array<Society>,
    isArray: true,
  })
  @ApiBearerAuth()
  @Get('/all')
  async getAllSocieties(): Promise<Society[]> {
    const soc = await this.societyService.getAllSocieties();
    if (!soc) {
      throw new HttpException('Societies not found', HttpStatus.NOT_FOUND);
    }
    return soc;
  }

  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiOkResponse({
    description: 'Add Member to Society',
    type: Society,
  })
  @ApiBearerAuth()
  @Post('/add-member')
  async addMemberToSociety(
    @Body() memDeets: addMemberSocietyDto,
  ): Promise<MemberOf> {
    const memberOf = await this.societyService.addMemberToSociety(memDeets);
    if (!memberOf) {
      throw new HttpException(
        'Something Went Wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return memberOf;
  }

  // TODO : Test this and proabaly optimize it
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiOkResponse({
    description: 'List All Members of Society',
    type: Array<SocietyMember>,
  })
  @ApiBearerAuth()
  @Get('/members/:sid')
  async listMembers(@Param('sid') sid: string): Promise<SocietyMember[]> {
    const memberOf = await this.societyService.getMembersOfSociety(sid);
    if (!memberOf) {
      throw new HttpException(
        'Something Went Wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return memberOf;
  }
}
