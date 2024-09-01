import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Training extends Document {
  @Prop()
  name: string;

  @Prop()
  coach: string;

  @Prop()
  time: string;

  @Prop()
  date: string;

  @Prop()
  address: string;

  @Prop()
  numberAthletes: number;
}

export const TrainingSchema = SchemaFactory.createForClass(Training);
