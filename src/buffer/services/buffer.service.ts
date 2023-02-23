import { Injectable } from '@nestjs/common';
import { CreateBufferDto } from '../dto/create-buffer.dto';
import { UpdateBufferDto } from '../dto/update-buffer.dto';

@Injectable()
export class BufferService {
  create(createBufferDto: CreateBufferDto) {
    return 'This action adds a new buffer';
  }

  findAll() {
    return `This action returns all buffer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buffer`;
  }

  update(id: number, updateBufferDto: UpdateBufferDto) {
    return `This action updates a #${id} buffer`;
  }

  remove(id: number) {
    return `This action removes a #${id} buffer`;
  }
}
