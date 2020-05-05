import { ArchitectType } from './architectType';
import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql';
import Architect from '../models/architect';

export const addArchitect = {
  type: ArchitectType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    cityOfBirth: {
      type: new GraphQLNonNull(GraphQLString)
    },
    age: {
      type: new GraphQLNonNull(GraphQLInt)
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
  },
  resolve(parent, args) {
    const {
      name, cityOfBirth, age, country,
      university, architectureStyle,
    } = args;

    const architect = new Architect({
      name,
      cityOfBirth,
      age,
      country,
      university,
      architectureStyle,
      date: new Date(),
    });

    return architect.save();
  }
};

export const deleteArchitect = {
  type: ArchitectType,
  args: {
    id: {
      type: GraphQLID
    }
  },
  resolve(parent, args) {
    const { id } = args;
    return Architect.findByIdAndRemove(id);
  }
};

export const updateArchitect = {
  type: ArchitectType,
  args: {
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
    country: {
      type: new GraphQLNonNull(GraphQLString)
    },
    university: {
      type: new GraphQLList(GraphQLString)
    },
    architectureStyle: {
      type: new GraphQLList(GraphQLString)
    }
  },
  resolve(parent, args) {
    const {
      id, name, cityOfBirth, country,
      age, university, architectureStyle, buildings
    } = args;

    return Architect.findByIdAndUpdate(
      id,
      {
        $set: {
          name, cityOfBirth, country,
          age, university, architectureStyle,
          date: new Date(),
        },
      },
      { new: true }
    )
  }
};
