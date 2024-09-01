import { Athlete } from '../src/entities/athlete.entity';

describe('Athlete', () => {
  it('should be defined', () => {
    expect(new Athlete()).toBeDefined();
  });
});
