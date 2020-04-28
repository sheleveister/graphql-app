import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
} from 'graphql';

import Architects from '../models/architect';
import Buildings from '../models/building';

import { ArchitectType } from './architectType';
import { BuildingType } from './buildingType';

enum GraphQLObjectTypeNames {
  Query = 'Query',
  Mutation = 'Mutation',
}

const architectsJson = [
  {
    id: "1",
    name: "Zaha Hadid",
    cityOfBirth: "Bagdad, Iraq",
    country: "British",
    dateOfBirth: "31.10.1950",
    age: 65,
    university: ["Architectural Association School of Architecture, London"],
    architectureStyle: ["neo-futurism", "parametricism", "deconstructivism"],
  },
];

const buildingsJson = [
  {
    name: "MAXXI",
    city: "Rome",
    year: "2010",
    description: "description 1",
    architectId: "5ea7006a79a84c9a0a6c9e9f"
  },
];

const Query = new GraphQLObjectType({
  name: GraphQLObjectTypeNames.Query,
  fields: {
    architect: {
      type: ArchitectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Architects.findById(args.id);
      },
    },
    architects: {
      type: new GraphQLList(ArchitectType),
      resolve() {
        return Architects.find({});
      }
    },
    building: {
      type: BuildingType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Buildings.findById(args.id);
      }
    },
    buildings: {
      type: new GraphQLList(BuildingType),
      resolve() {
        return Buildings.find({});
      }
    }
  }
});

export default new GraphQLSchema({
  query: Query,
});
