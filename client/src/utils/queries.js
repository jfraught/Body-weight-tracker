import gql from 'graphql-tag';

export const QUERY_USER = gql`
    query user($display_name: String!) {
        user(display_name: $display_name) {
            _id
            display_name
            email
            stats {
                bodyWeight
                waistCircumference
                createdAt
                display_name 
            }
        }
    }
`;

export const QUERY_ME = gql `
{
    me {
           _id
            display_name
            email
            stats {
                bodyWeight
                waistCircumference
                createdAt
                display_name 
            }  
        }
}
`

export const GET_DAYLOGS = gql `
query daylogs($display_name: String!) {
    daylogs(display_name: $display_name) {
        bodyWeight
        waistCircumference
        createdAt
        display_name
    }
}
`;