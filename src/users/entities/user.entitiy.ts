import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { UserType } from 'src/common/types/common.types';
import { MemberOf } from 'src/society/entities/member.entitiy';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'users',
})
export class User {
  @ApiProperty({
    description: 'ID of user',
    example: '89c018cc-8a77-4dbd-94e1-dbaa710a2a9c',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Email of user', example: 'atest@email.com' })
  @Column({ unique: true })
  email: string;

  @ApiHideProperty()
  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @ApiProperty({ description: 'Name of user', example: 'John Doe' })
  @Column()
  name: string;

  @ApiProperty({
    description: 'Phone number of user (dont pass +91)',
    example: '+91 xxxxxxxxxx',
    maxLength: 10,
    minLength: 10,
  })
  @Column({
    nullable: true,
    length: 10,
  })
  phone: string;

  @ApiProperty({ description: 'Type of User', example: 'FACULTY/STUDENT' })
  @Column()
  type: UserType;

  @ApiProperty({ description: 'Department of user', example: 'CSE' })
  @Column()
  department: string;

  @ApiProperty({
    description: 'User Active Status',
    example: 'true/false',
  })
  @Column({ default: true })
  isActive: boolean;

  @ApiProperty({ description: 'Created date of user' })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty({ description: 'Updated date of user' })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => MemberOf, (memberOf) => memberOf.user)
  public memberOf: MemberOf[];
}