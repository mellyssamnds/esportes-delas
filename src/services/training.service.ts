import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Training } from '../entities/training.entity';

@Injectable()
export class TrainingService {
  constructor(
    @InjectModel(Training.name) private trainingModel: Model<Training>,
  ) {}

  async create(training: Training): Promise<Training> {
    try {
      const createdTraining = new this.trainingModel(training);
      return createdTraining.save();
    } catch {
      throw new InternalServerErrorException('Error creating training');
    }
  }

  async getAll(): Promise<Training[]> {
    return this.trainingModel.find().exec();
  }

  async findOne(id: string): Promise<Training> {
    try {
      const training = await this.trainingModel.findById(id).exec();
      if (!training) {
        throw new NotFoundException('Training not found');
      }
      return training;
    } catch {
      throw new InternalServerErrorException('Error finding training');
    }
  }

  async update(id: string, training: Training): Promise<Training> {
    try {
      const updatedTraining = await this.trainingModel
        .findByIdAndUpdate(id, training, { new: true })
        .exec();
      if (!updatedTraining) {
        throw new NotFoundException('Training not found');
      }
      return updatedTraining;
    } catch {
      throw new InternalServerErrorException('Error updating training');
    }
  }

  async delete(id: string): Promise<Training> {
    try {
      const deletedTraining = await this.trainingModel
        .findByIdAndDelete(id)
        .exec();
      if (!deletedTraining) {
        throw new NotFoundException('Training not found');
      }
      return deletedTraining;
    } catch {
      throw new InternalServerErrorException('Error deleting training');
    }
  }
}
