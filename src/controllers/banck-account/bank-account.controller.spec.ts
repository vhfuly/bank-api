import { Test, TestingModule } from '@nestjs/testing';
import { BanckAccountController } from './banck-account.controller';

describe('BanckAccountController', () => {
  let controller: BanckAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BanckAccountController],
    }).compile();

    controller = module.get<BanckAccountController>(BanckAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
