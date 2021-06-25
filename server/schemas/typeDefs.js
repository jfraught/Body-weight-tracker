const {gql} = require('apollo-server-express');

const typeDefs = gql`
type User {
   _id: ID
   name: String
   email: String 
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
   
   bodyweight: Int
   waisteCircumference: Int
   bmi: Int 
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
    token: ID!
    user: User
}




type Query {
    user: User
    profile: Profile
    daylog: DayLog

}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    addProfile(height: Int!, goalWeight: Int!, goalWaist: Int!, goalBMI: Int!): Profile
    addDayLog( bodyWeight: Int!, waisteCircumference: Int!, bmi:Int!): DayLog
    addProgressPics(profileId: ID!, initialFront: String!, initialSide: String!, initialBack: String!,  currentFront: String! ,  currentSide: String! , currentBack: String! ): Profile
    

}
`

module.exports= typeDefs;