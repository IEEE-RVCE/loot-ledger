import { PartialType } from '@nestjs/swagger';
import { CreateBufferDto } from './create-buffer.dto';

export class UpdateBufferDto extends PartialType(CreateBufferDto) {}
