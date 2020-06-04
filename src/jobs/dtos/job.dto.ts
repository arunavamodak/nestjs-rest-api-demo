import { Document } from 'mongoose';
export class JobDto extends Document {
  readonly title: string;
  readonly salary: number;
}
