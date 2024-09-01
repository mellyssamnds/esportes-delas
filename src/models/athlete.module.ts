import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Athlete, AthleteSchema } from '../entities/athlete.entity';
import { AthleteService } from '../services/athlete.service';
import { AthleteController } from '../controllers/athlete.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Athlete.name,
        schema: AthleteSchema,
      },
    ]),
  ],
  exports: [],
  controllers: [AthleteController],
  providers: [AthleteService],
})
export class AthleteModule {}
