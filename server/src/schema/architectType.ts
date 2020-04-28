import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { Model } from '../models/models';
import Building from '../models/building';
import { BuildingType } from './buildingType';

export const ArchitectType = new GraphQLObjectType({
  name: Model.Architect,
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    cityOfBirth: {
      type: new GraphQLNonNull(GraphQLString)
    },
    dateOfBirth: {
      type: new GraphQLNonNull(GraphQLString)
    },
    country: {
      type: new GraphQLNonNull(GraphQLString)
    },
    university: {
      type: new GraphQLList(GraphQLString)
    },
    architectureStyle: {
      type: new GraphQLList(GraphQLString)
    },
    buildings: {
      type: new GraphQLList(BuildingType),
      resolve(parent, args) {
        return Building.find({ architectId: parent.id })
      }
    }
  }),
});
