import { Test, TestingModule } from '@nestjs/testing';
import { BufferController } from './buffer.controller';
import { BufferService } from '../services/buffer.service';

describe('BufferController', () => {
  let controller: BufferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BufferController],
      providers: [BufferService],
    }).compile();

    controller = module.get<BufferController>(BufferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
