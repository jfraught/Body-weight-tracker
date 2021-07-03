const {gql} = require('apollo-server-express');

const typeDefs = gql`
type User {
   _id: ID
   display_name: String
   email: String 
   password: String
   dayLogs: [DayLog]
}

type Profile {
    _id: ID
   height: Int
   goalWeight: Int
   goalWaist: Int
   goalBMI: Int
   progress:[ProgressPics] 
}

type DayLog {
   _id: ID
   bodyWeight: Int
   waistCircumference: Int
   bmi: Int
   createdAt: String
}

type ProgressPics {
    _id: ID
    initialFront: String
    initialSide: String
    initialBack: String
    currentFront: String
    currentSide: String
    currentBack: String
}

type Auth {
    token: ID
    user: User
}
 
type File {
    filename: String!
}



type Query {
    user(display_name: String!): User
    users: [User]
    dayLogs(display_name: String!): [DayLog]
    
}

 type Mutation {
    login(display_name: String!, password: String!): Auth
    addUser(display_name: String!, email: String!, password: String!): Auth
    addProfile(height: Int!, goalWeight: Int!, goalWaist: Int!, goalBMI: Int!): Profile
    addDayLog(bodyWeight: Int!, waistCircumference: Int!, bmi: Int, createdAt: String): DayLog
   
}
`

module.exports= typeDefs;

/**old apollo-upload-client way
 * type File {
    filename: String!
}
 addProgressPics( initialFront: Upload! ): File!
}


 * 
 */