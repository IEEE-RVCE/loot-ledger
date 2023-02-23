import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BufferService } from '../services/buffer.service';
import { CreateBufferDto } from '../dto/create-buffer.dto';
import { UpdateBufferDto } from '../dto/update-buffer.dto';

@Controller('buffer')
export class BufferController {
  constructor(private readonly bufferService: BufferService) {}

  @Post()
  create(@Body() createBufferDto: CreateBufferDto) {
    return this.bufferService.create(createBufferDto);
  }

  @Get()
  findAll() {
    return this.bufferService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bufferService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBufferDto: UpdateBufferDto) {
    return this.bufferService.update(+id, updateBufferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bufferService.remove(+id);
  }
}
