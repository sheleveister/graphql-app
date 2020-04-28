import { GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { Model } from '../models/models';
import Buildings from '../models/building';
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
    age: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    university: {
      type: new GraphQLList(GraphQLString)
    },
    architectureStyle: {
      type: new GraphQLList(GraphQLString)
    },
    buildings: {
      type: new GraphQLList(BuildingType),
      resolve(parent) {
        return Buildings.find({ architectId: parent.id })
      }
    }
  }),
});
