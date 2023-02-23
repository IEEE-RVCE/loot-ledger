import { ApiProperty } from '@nestjs/swagger';
import { bufferType } from 'src/common/types/common.types';
import { Events } from 'src/events/entities/event.entity';
import { Society } from 'src/society/entities/society.entitiy';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'buffer_store',
})
export class BufferStore {
  @ApiProperty({
    description: 'ID of Buffer',
    example: '1',
  })
  @PrimaryGeneratedColumn('increment')
  id: string;

  @ApiProperty({
    description: 'Blob of the Buffer',
    format: 'binary',
  })
  @Column({ type: 'blob' })
  blob: Buffer;

  @ApiProperty({
    description: 'Type of the Buffer',
    example: 'REPORT',
    enum: bufferType,
  })
  @Column({
    type: 'enum',
    enum: bufferType,
    default: bufferType.DEFAULT,
  })
  type: bufferType;

  @ApiProperty({ description: 'Created date of Buffer' })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToMany(() => Events)
  @JoinTable({
    name: 'documents',
  })
  events: Events[];

  @ManyToMany(() => Transaction)
  @JoinTable({
    name: 'assets',
  })
  assets: BufferStore[];
}
