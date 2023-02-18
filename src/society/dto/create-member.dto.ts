import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { memberPosition } from 'src/common/types/common.types';

export class addMemberSocietyDto {
  @ApiProperty({
    description: 'Society Id',
    example: '1',
  })
  @IsNotEmpty()
  sid: string;

  @ApiProperty({
    description: 'User Id',
    example: '1',
  })
  @IsNotEmpty()
  uid: string;

  @ApiProperty({
    description: 'Position of the user in the society',
    example: 'CHAIR',
  })
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(10)
  @IsEnum(memberPosition)
  position: memberPosition;

  @ApiProperty({
    description: 'Tenure Start Date',
    example: '2020-01-01',
  })
  @IsNotEmpty()
  tenureStart: Date;

  @ApiProperty({
    description: 'Tenure End Date',
    example: '2020-01-01',
  })
  @IsNotEmpty()
  tenureEnd: Date;
}
