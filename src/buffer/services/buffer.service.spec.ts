import { Test, TestingModule } from '@nestjs/testing';
import { BufferService } from '../services/buffer.service';

describe('BufferService', () => {
  let service: BufferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BufferService],
    }).compile();

    service = module.get<BufferService>(BufferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
