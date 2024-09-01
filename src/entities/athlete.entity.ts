import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Athlete extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  address: string;

  @Prop()
  sportsInterests: string[];
}

export const AthleteSchema = SchemaFactory.createForClass(Athlete);
