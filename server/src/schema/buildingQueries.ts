import { BuildingType } from './buildingType';
import { GraphQLID, GraphQLList } from 'graphql';
import Building from '../models/building';

export const building = {
  type: BuildingType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Building.findById(args.id);
  }
};

export const buildings = {
  type: new GraphQLList(BuildingType),
  resolve() {
    return Building.find({});
  }
};
