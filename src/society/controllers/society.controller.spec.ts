import { Test, TestingModule } from '@nestjs/testing';
import { SocietyService } from '../services/society.service';
import { SocietyController } from './society.controller';

describe('SocietyController', () => {
  let controller: SocietyController;
  const service = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SocietyController],
      providers: [SocietyService],
    })
      .overrideProvider(SocietyService)
      .useValue(service)
      .compile();

    controller = module.get<SocietyController>(SocietyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of societies', async () => {
    const res = controller.getAllSocieties();
    expect(res).toBeInstanceOf(Array);
  });
});
