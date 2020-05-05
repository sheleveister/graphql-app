import mongoose from 'mongoose';
import { Model } from './models';

const Schema: typeof mongoose.Schema = mongoose.Schema;

const architectureStylesSchema = new Schema({
  name: String,
});

export default mongoose.model(Model.Styles, architectureStylesSchema);
