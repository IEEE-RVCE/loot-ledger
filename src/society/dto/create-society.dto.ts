import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class createSocietyDto {
  @ApiProperty({
    description: 'Society Name',
    example: 'Computer Society',
  })
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsEmail()
  @MaxLength(255)
  email: string;

  @ApiProperty({
    description: 'Society Department',
    nullable: true,
    example: 'CSE',
  })
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(5)
  department: string;

  @ApiProperty({
    description: 'User Active Status',
    example: 'true/false',
  })
  @IsNotEmpty()
  isActive: boolean;

  @ApiProperty({
    description: 'Society Founded Date',
    example: '2020-01-01',
  })
  foundedDate: Date;
}
