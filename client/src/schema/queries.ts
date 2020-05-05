import gql from 'graphql-tag';

export const architectorsQuery = gql`
  query {
    architects {
      id
      name
      cityOfBirth
      age
      university
      architectureStyle
      buildings {
        name
      }
    }
  }
`;

export const universitiesQuery = gql`
  query {
    universities {
      id,
      name,
    }
  }
`;

export const architectureStylesQuery = gql`
  query {
    styles {
      id,
      name,
    }
  }
`;
