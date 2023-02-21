import { ApiProperty } from '@nestjs/swagger';
import { memberPosition } from 'src/common/types/common.types';
import { User } from 'src/users/entities/user.entitiy';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Society } from './society.entitiy';

@Entity({
  name: 'member_of',
})
export class MemberOf {
  @ApiProperty({
    description: 'ID of MemberOf',
    example: '1',
  })
  @PrimaryGeneratedColumn('increment')
  id: string;

  @ApiProperty({
    description: 'Position Of Member',
    example: 'CHAIR',
  })
  @Column({
    type: 'enum',
    enum: memberPosition,
    default: memberPosition.MEMBER,
  })
  position: memberPosition;

  @ApiProperty({ description: 'Tenure Start', example: '2021-01-01' })
  @Column({
    name: 'tenure_start',
  })
  tenureStart: Date;

  @ApiProperty({ description: 'Tenure End', example: '2022-01-01' })
  @Column({
    name: 'tenure_end',
  })
  tenureEnd: Date;

  @Unique(['user', 'position'])
  @ManyToOne(() => User, (user) => user.id)
  @JoinTable()
  public user: User;

  @ManyToOne(() => Society, (society) => society.id)
  @JoinTable()
  public society: Society;

  @ApiProperty({ description: 'Created At' })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty({ description: 'Updated At' })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
