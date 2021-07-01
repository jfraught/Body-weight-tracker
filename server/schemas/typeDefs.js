const {gql} = require('apollo-server-express');

const typeDefs = gql`
type User {
   _id: ID
   display_name: String
   email: String 
   password: String
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
   weight: String
   waist: String
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
 




type Query {
    user: User
    users: [User]
    profile: Profile
    profiles: [Profile]
    daylog: DayLog
    daylogs: [DayLog]
    
}

 type Mutation {
    login(email: String!, password: String!): Auth
    addUser(display_name: String!, email: String!, password: String!): Auth
    addProfile(height: Int!, goalWeight: Int!, goalWaist: Int!, goalBMI: Int!): Profile
    addDayLog( bodyWeight: Int!, waistCircumference: Int!, bmi:Int!): DayLog
   
}

scalar Upload extend type Mutation {
    addProgressPics( initialFront: Upload! ): String!
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