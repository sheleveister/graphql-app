import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { architect, architects } from './architectQueries';
import { building, buildings } from './buildingQueries';
import { universities } from './universitiesQueries';
import { styles } from './architectureStylesQueries';

import { addArchitect, deleteArchitect, updateArchitect } from './architectMutations';
import { addBuilding, deleteBuilding, updateBuilding } from './buildingMutations';

enum GraphQLObjectTypeNames {
  Query = 'Query',
  Mutation = 'Mutation',
}

const Query = new GraphQLObjectType({
  name: GraphQLObjectTypeNames.Query,
  fields: {
    architect,
    architects,
    building,
    buildings,
    universities,
    styles,
  }
});

const Mutations = new GraphQLObjectType({
  name: GraphQLObjectTypeNames.Mutation,
  fields: {
    addArchitect,
    deleteArchitect,
    updateArchitect,

    addBuilding,
    deleteBuilding,
    updateBuilding,
  }
});

export default new GraphQLSchema({
  query: Query,
  mutation: Mutations,
});
