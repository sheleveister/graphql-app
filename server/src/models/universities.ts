import mongoose from 'mongoose';
import { Model } from './models';

const Schema: typeof mongoose.Schema = mongoose.Schema;

const universitiesSchema = new Schema({
  name: String,
  date: Date
});

export default mongoose.model(Model.Universities, universitiesSchema);
