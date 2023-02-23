import { Module } from '@nestjs/common';
import { BufferService } from './services/buffer.service';
import { BufferController } from './controllers/buffer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BufferStore } from './entities/buffer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BufferStore])],
  controllers: [BufferController],
  providers: [BufferService],
})
export class BufferModule {}
