import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($display_name: String!, $password: String!) {
        login(display_name: $display_name, password: $password) {
            token
            user {
                _id
                display_name
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($display_name: String!, $email: String!, $password: String!) {
        addUser(display_name: $display_name, email: $email, password: $password) {
            token
            user {
                _id
                display_name
            }
        }
    }
`;

export const ADD_DAILY_STATS = gql`
    mutation addDayLog($bodyWeight: Int!, $waistCircumference: Int!, $bmi: Int, $createdAt: String) {
        addDayLog(bodyWeight: $bodyWeight, waistCircumference: $waistCircumference, bmi: $bmi, createdAt: $createdAt) {
            _id
            bodyWeight
            waistCircumference
            bmi
            createdAt
        }
    }
`;