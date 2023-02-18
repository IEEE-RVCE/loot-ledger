import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { UserType } from 'src/common/types/common.types';

import { Match } from '../../common/decorators/match.decorator';

export class SignUpDto {
  @ApiProperty({
    example: 'atest@email.com',
    description: 'Email of user',
  })
  @IsEmail()
  @MaxLength(255)
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    description: 'Password of user',
    example: 'Pass#123',
  })
  @MinLength(8, {
    message: 'password too short',
  })
  @MaxLength(20, {
    message: 'password too long',
  })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({
    description: 'Repeat same value as in password field',
    example: 'Pass#123',
  })
  @Match('password')
  @IsNotEmpty()
  readonly passwordConfirm: string;

  @ApiProperty({
    description: 'Name of user',
    example: 'John Doe',
  })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    description: 'Phone number of user (dont pass +91)',
    example: '+91 xxxxxxxxxx',
    maxLength: 10,
    minLength: 10,
  })
  @IsNotEmpty()
  readonly phone: string;

  @ApiProperty({
    description: 'Type of User',
    example: 'FACULTY/STUDENT',
  })
  @IsNotEmpty()
  @IsEnum(UserType)
  readonly type: UserType;

  @ApiProperty({
    description: 'Department of user',
    example: 'CSE',
  })
  @IsNotEmpty()
  readonly department: string;

  @ApiProperty({
    description: 'User Active Status',
    example: 'true/false',
  })
  @IsNotEmpty()
  readonly active: boolean;
}
