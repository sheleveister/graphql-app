import { GraphQLList } from 'graphql';
import { UniversityType } from './universityType';
import Universities from '../models/universities';

export const universities = {
  type: new GraphQLList(UniversityType),
  resolve() {
    return Universities.find({}).sort({ name: 'ASC' });
  }
};
