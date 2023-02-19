import { Test, TestingModule } from '@nestjs/testing';
import { Society } from '../entities/society.entitiy';
import { SocietyService } from './society.service';

describe('SocietyService', () => {
  let service: SocietyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocietyService],
    }).compile();

    service = module.get<SocietyService>(SocietyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of societies', async () => {
    const res = await service.getAllSocieties();
    expect(res).toBeInstanceOf(Array<Society>);
  });

  it('should return a society by id', async () => {
    const res = await service.getSocietyById('1');
    expect(res).toBeInstanceOf(Society);
  });

  it('should return a society by name', async () => {
    const res = await service.getSocietyByName('Computer Society');
    expect(res).toBeInstanceOf(Society);
  });
});
