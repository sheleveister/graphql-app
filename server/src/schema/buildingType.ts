import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { Model } from '../models/models';
import Architect from '../models/architect';
import { ArchitectType } from './architectType';

export const BuildingType = new GraphQLObjectType({
  name: Model.Building,
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    city: {
      type: new GraphQLNonNull(GraphQLString)
    },
    year: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: GraphQLString
    },
    architectId: {
      type: new GraphQLNonNull(ArchitectType),
      resolve(parent) {
        return Architect.findById(parent.architectId)
      }
    }
  })
});
