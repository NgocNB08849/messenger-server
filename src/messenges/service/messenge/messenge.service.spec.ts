import { Test, TestingModule } from '@nestjs/testing';
import { MessengeService } from './messenge.service';

describe('MessengeService', () => {
  let service: MessengeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessengeService],
    }).compile();

    service = module.get<MessengeService>(MessengeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
