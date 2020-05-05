import gql from 'graphql-tag';

export const addArchitect = gql`
  mutation(
  $name: String!, 
  $cityOfBirth: String!, 
  $age: Int!, 
  $country: String!, 
  $university: [String], 
  $architectureStyle: [String], 
) {
  addArchitect(
    name: $name, 
    cityOfBirth: $cityOfBirth, 
    university: $university, 
    architectureStyle: $architectureStyle, 
    age: $age, 
    country: $country
  ) {
    name
    cityOfBirth
    age
    country
    university
    architectureStyle
  }
}
`;

export const deleteArchitect = gql`
  mutation($id: ID) {
    deleteArchitect(id: $id) {
      name
    }
  }
`;
