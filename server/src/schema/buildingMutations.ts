import { BuildingType } from './buildingType';
import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import Building from '../models/building';

export const addBuilding = {
  type: BuildingType,
  args: {
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
      type: new GraphQLNonNull(GraphQLID)
    },
  },
  resolve(parent, args) {
    const {
      name, city, year, description, architectId
    } = args;

    const building = new Building({
      name,
      city,
      year,
      description,
      architectId,
    });

    return building.save();
  }
};

export const deleteBuilding = {
  type: BuildingType,
  args: {
    id: {
      type: GraphQLID
    }
  },
  resolve(parent, args) {
    const { id } = args;
    return Building.findByIdAndRemove(id);
  }
};

export const updateBuilding = {
  type: BuildingType,
  args: {
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
      type: new GraphQLNonNull(GraphQLID)
    },
  },
  resolve(parent, args) {
    const {
      id, name, city, year, description, architectId
    } = args;

    return Building.findByIdAndUpdate(
      id,
      {
        $set: {
          name, city, year, description, architectId
        },
      },
      { new: true }
    )
  }
};
