import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
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
    mutation addDayLog($bodyWeight: Int!, $waistCircumference: Int!, $bmi: Int, $createdOn: String) {
        addDayLog(bodyWeight: $bodyWeight, waistCircumference: $waistCircumference, bmi: $bmi, createdOn: $createdOn) {
            _id
            bodyWeight
            waistCircumference
            bmi
        }
    }
`;