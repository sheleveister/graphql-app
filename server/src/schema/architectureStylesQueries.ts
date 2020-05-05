import { GraphQLList } from 'graphql';
import ArchitectureStyles from '../models/architectureStyles';
import { ArchitectureStylesType } from './architectureStylesType';

export const styles = {
  type: new GraphQLList(ArchitectureStylesType),
  resolve() {
    return ArchitectureStyles.find({}).sort({ name: 'ASC' });
  }
};
