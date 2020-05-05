import { ArchitectType } from './architectType';
import { GraphQLID, GraphQLList } from 'graphql';
import Architect from '../models/architect';

export const architect = {
  type: ArchitectType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Architect.findById(args.id);
  },
};

export const architects = {
  type: new GraphQLList(ArchitectType),
  resolve() {
    return Architect.find({}).sort({ date: 'DESC' });
  }
};
