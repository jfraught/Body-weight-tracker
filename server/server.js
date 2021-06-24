const express = require('express');
//const { ApolloServer } = require('apollo-server-express');
//const path = require('path');
//const { authMiddleware } = require('./utils/authorize')

// schema files
const { typeDefs, resolvers } = require('./schemas')


// mongoose connection logic
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// Apollo server instance
const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context: authMiddleware
})

// important middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// port connection
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on the greatest port! ${PORT}!!!`);
    })
})