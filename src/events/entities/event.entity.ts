import { ApiProperty } from '@nestjs/swagger';
import { BufferStore } from 'src/buffer/entities/buffer.entity';
import { Society } from 'src/society/entities/society.entitiy';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'events',
})
export class Events {
  @ApiProperty({
    description: 'ID of Event',
    example: '1',
  })
  @PrimaryGeneratedColumn('increment')
  id: string;

  @ApiProperty({
    description: 'Name of Event',
    example: 'Panorama',
  })
  @Column({ unique: true })
  name: string;

  @ApiProperty({
    description: 'Event Conducted Date',
    example: '2021-01-01',
    nullable: true,
  })
  @Column()
  conductedDate: Date;

  @ApiProperty({ description: 'Created date of Event' })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty({ description: 'Updated date of Event' })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToMany(() => Society)
  @JoinTable({
    name: 'conducted',
  })
  societies: Society[];

  // @ManyToMany(() => Buffer)
  // @JoinTable({
  //   name: 'documents',
  // })
  // documents: BufferStore[];
}
