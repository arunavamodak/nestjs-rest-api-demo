import { Document } from 'mongoose';

export interface Job extends Document {
  id?: String;
  title: String;
  salary: Number;
}
