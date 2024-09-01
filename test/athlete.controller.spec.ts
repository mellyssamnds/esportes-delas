import { Test, TestingModule } from '@nestjs/testing';
import { AthleteController } from '../src/controllers/athlete.controller';

describe('AthleteController', () => {
  let controller: AthleteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AthleteController],
    }).compile();

    controller = module.get<AthleteController>(AthleteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
