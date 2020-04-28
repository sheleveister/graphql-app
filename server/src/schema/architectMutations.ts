import { ArchitectType } from './architectType';
import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
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
  },
  resolve(parent, args) {
    const {
      name, cityOfBirth, dateOfBirth, country,
      university, architectureStyle,
    } = args;

    const architect = new Architect({
      name,
      cityOfBirth,
      dateOfBirth,
      country,
      university,
      architectureStyle,
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
    }
  },
  resolve(parent, args) {
    const {
      id, name, cityOfBirth, dateOfBirth, country,
      age, university, architectureStyle, buildings
    } = args;

    return Architect.findByIdAndUpdate(
      id,
      {
        $set: {
          name, cityOfBirth, dateOfBirth, country,
          age, university, architectureStyle
        },
      },
      { new: true }
    )
  }
};
