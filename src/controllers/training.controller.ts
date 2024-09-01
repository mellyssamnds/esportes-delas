import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TrainingService } from '../services/training.service';
import { Training } from '../entities/training.entity';
import { NotFoundException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('trainings')
@Controller('trainings')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @Post()
  async create(@Body() createTrainingDto: Training): Promise<Training> {
    try {
      return await this.trainingService.create(createTrainingDto);
    } catch {
      throw new HttpException(
        'Error creating training',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async getAll(): Promise<Training[]> {
    return this.trainingService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Training> {
    try {
      return await this.trainingService.findOne(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      } else {
        throw new HttpException(
          'Error finding training',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTrainingDto: Training,
  ): Promise<Training> {
    try {
      return await this.trainingService.update(id, updateTrainingDto);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      } else {
        throw new HttpException(
          'Error updating training',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Training> {
    try {
      return await this.trainingService.delete(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      } else {
        throw new HttpException(
          'Error deleting training',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
}
