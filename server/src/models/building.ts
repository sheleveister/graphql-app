import mongoose from 'mongoose';
import { Model } from './models';

const Schema: typeof mongoose.Schema = mongoose.Schema;

const buildingSchema = new Schema({
  name: String,
  city: String,
  year: String,
  description: String,
  architectId: String,
});

export default mongoose.model(Model.Building, buildingSchema);
