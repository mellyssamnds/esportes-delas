import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Athlete } from '../entities/athlete.entity';

@Injectable()
export class AthleteService {
  constructor(
    @InjectModel(Athlete.name) private athleteModel: Model<Athlete>,
  ) {}

  async getAll(): Promise<Athlete[]> {
    return this.athleteModel.find();
  }

  async create(athlete: Athlete): Promise<Athlete> {
    try {
      const existingAthlete = await this.athleteModel
        .findOne({ name: athlete.name })
        .exec();
      if (existingAthlete) {
        throw new ConflictException('Athlete with this name already exists');
      }

      const createdAthlete = new this.athleteModel(athlete);
      return createdAthlete.save();
    } catch {
      throw new InternalServerErrorException('Error creating athlete');
    }
  }

  async update(id: string, athlete: Athlete): Promise<Athlete> {
    try {
      const updatedAthlete = await this.athleteModel
        .findByIdAndUpdate(id, athlete, { new: true })
        .exec();
      if (!updatedAthlete) {
        throw new NotFoundException('Athlete not found');
      }
      return updatedAthlete;
    } catch {
      throw new InternalServerErrorException('Error updating athlete');
    }
  }

  async deleteById(id: string): Promise<Athlete | null> {
    try {
      const deletedAthlete = await this.athleteModel
        .findByIdAndDelete(id)
        .exec();
      if (!deletedAthlete) {
        throw new NotFoundException('Athlete not found');
      }
      return deletedAthlete;
    } catch {
      throw new InternalServerErrorException('Error deleting athlete');
    }
  }
}
