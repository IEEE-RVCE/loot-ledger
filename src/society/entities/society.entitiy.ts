import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MemberOf } from './member.entitiy';

@Entity({
  name: 'socities',
})
export class Society {
  @ApiProperty({
    description: 'ID of Society',
    example: '1',
  })
  @PrimaryGeneratedColumn('increment')
  id: string;

  @ApiProperty({
    description: 'Email of Society',
    example: 'atest@email.com',
    nullable: true,
  })
  @Column({ unique: true, nullable: true })
  email: string;

  @ApiProperty({ description: 'Name of Society', example: 'Computer Society' })
  @Column({
    unique: true,
  })
  name: string;

  @ApiProperty({
    description: 'Department of Society',
    example: 'CSE',
    nullable: true,
  })
  @Column({
    nullable: true,
  })
  department: string;

  @ApiProperty({
    description: 'Society Active Status',
    example: 'true/false',
  })
  @Column({ default: true })
  isActive: boolean;

  @ApiProperty({
    description: 'Society Founded Date',
    example: '2021-01-01',
    nullable: true,
  })
  @Column({ nullable: true })
  foundedDate: Date;

  @ApiProperty({ description: 'Created date of Society' })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty({ description: 'Updated date of Society' })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => MemberOf, (memberOf) => memberOf.society)
  public memberOf: MemberOf[];
}
