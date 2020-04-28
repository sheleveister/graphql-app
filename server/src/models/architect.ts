import mongoose from 'mongoose';
import { Model } from './models';

const Schema: typeof mongoose.Schema = mongoose.Schema;

const architectSchema = new Schema({
  name: String,
  cityOfBirth: String,
  country: String,
  dateOfBirth: String,
  age: Number,
  university: [String],
  architectureStyle: [String],
});

export default mongoose.model(Model.Architect, architectSchema);
