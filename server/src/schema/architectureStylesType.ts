import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { Model } from '../models/models';

export const ArchitectureStylesType = new GraphQLObjectType({
  name: Model.Styles,
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
  }),
});
