import gql from 'graphql-tag';

export const QUERY_USER = gql`
    query user($display_name: String!) {
        user(display_name: $display_name) {
            _id
            display_name
            email
        }
    }
`;