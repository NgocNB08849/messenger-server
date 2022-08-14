import { Test, TestingModule } from '@nestjs/testing';
import { MessengesController } from './messenges.controller';

describe('MessengesController', () => {
  let controller: MessengesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessengesController],
    }).compile();

    controller = module.get<MessengesController>(MessengesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
