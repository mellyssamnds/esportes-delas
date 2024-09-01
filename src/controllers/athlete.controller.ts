import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  HttpException,
  HttpStatus,
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { Athlete } from '../entities/athlete.entity';
import { AthleteService } from '../services/athlete.service';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('athletes')
@Controller('athletes')
export class AthleteController {
  constructor(private readonly AthleteService: AthleteService) {}

  @Get()
  @ApiOperation({
    summary: 'Shows registered athletes',
    description: 'Shows registered athletes according to API parameters',
  })
  async getAll(): Promise<Athlete[]> {
    try {
      return this.AthleteService.getAll();
    } catch {
      throw new HttpException(
        'Error when displaying athletes',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new athlete',
    description:
      'Creates an athlete in the system according to the parameters established in the API',
  })
  @ApiBody({
    type: Athlete,
    examples: {
      'Athlete Example': {
        value: {
          name: 'Thaisa Daher',
          age: 30,
          address: 'Avenida Carioca, 144, Laranjeiras - ES',
          sportsInterests: ['Vôlei', 'Basquete', 'Futebol'],
        },
      },
    },
  })
  async create(@Body() athlete: Athlete): Promise<Athlete> {
    try {
      return await this.AthleteService.create(athlete);
    } catch (error) {
      if (error.code === 11000) {
        throw new HttpException(
          'Error creating athlete',
          HttpStatus.BAD_REQUEST,
        );
      } else {
        throw new HttpException(
          'Athlete with this name already exists',
          HttpStatus.CONFLICT,
        );
      }
    }
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update athlete data',
    description:
      'Using the id passed as a parameter, it updates the athlete information',
  })
  async update(
    @Param('id') id: string,
    @Body() updatedAthlete: Athlete,
  ): Promise<Athlete> {
    try {
      return await this.AthleteService.update(id, updatedAthlete);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      } else if (error instanceof BadRequestException) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      } else if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      } else {
        throw new HttpException(
          'Error updating athlete',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete athlete data',
    description:
      'Using the id passed as a parameter, deletes the athlete information',
  })
  async delete(@Param('id') id: string): Promise<Athlete | null> {
    try {
      return await this.AthleteService.deleteById(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      } else if (error instanceof BadRequestException) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      } else {
        throw new HttpException(
          'Error deleting athlete',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
}
