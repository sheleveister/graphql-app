import mongoose from 'mongoose';
import { Model } from './models';

const Schema: typeof mongoose.Schema = mongoose.Schema;

const architectSchema = new Schema({
  name: String,
  cityOfBirth: String,
  age: Number,
  country: String,
  university: [String],
  architectureStyle: [String],
  buildings: [String],
  date: Date
});

export default mongoose.model(Model.Architect, architectSchema);
