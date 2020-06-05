import { Document } from 'mongoose';

export class JobDto extends Document {
  readonly title: String;
  readonly salary: Number;
}
