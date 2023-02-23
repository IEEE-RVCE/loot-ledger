import { ApiProperty } from '@nestjs/swagger';
import { BufferStore } from 'src/buffer/entities/buffer.entity';
import { transactionType } from 'src/common/types/common.types';
import { Events } from 'src/events/entities/event.entity';
import { Society } from 'src/society/entities/society.entitiy';
import { User } from 'src/users/entities/user.entitiy';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'transactions' })
export class Transaction extends BaseEntity {
  @ApiProperty({
    description: 'ID of Event',
    example: '1',
  })
  @PrimaryGeneratedColumn('increment')
  id: string;

  @ApiProperty({
    description: 'Type of Transaction',
    enum: transactionType,
    example: 'DEBIT',
  })
  @Column({
    type: 'enum',
    enum: transactionType,
    default: transactionType.DEBIT,
  })
  type: transactionType;

  @ApiProperty({
    description: 'Amount of Transaction',
    example: '1000',
  })
  @Column()
  amount: number;

  @ApiProperty({
    description: 'Description of Transaction',
    example: 'Bought Momentums for guests of Panorama Event',
  })
  @Column()
  description: string;

  @ApiProperty({
    description: 'Date of Transaction',
    example: '2021-01-01',
  })
  @Column()
  date: Date;

  @ApiProperty({
    description: 'Society ID of Transaction',
    example: '1',
  })
  @ApiProperty({
    description: 'Level of Transaction',
    example: '1',
  })
  @Column({
    default: 1,
    // max level is 5
  })
  level: number;

  // read README for more info why this attribute is needed
  @ApiProperty({
    description: 'Last Status of Transaction',
    example: true,
  })
  @Column({
    default: true,
  })
  lastStatus: boolean;

  @ApiProperty({ description: 'Created date of Transaction' })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty({ description: 'Updated date of Transaction' })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToMany(() => Events)
  @JoinTable({
    name: 'spent',
  })
  events: Events[];

  @ManyToMany(() => Society)
  @JoinTable({
    name: 'handled',
  })
  societies: Society[];

  @ManyToMany(() => User)
  @JoinTable({
    name: 'signed_off',
  })
  users: User[];
}
