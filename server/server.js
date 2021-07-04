const { ApolloServer } = require('apollo-server-express');
const express = require('express');

const path = require('path');
const { authMiddleware } = require('./utils/authorize');
require('dotenv').config();
// schema files
const { typeDefs, resolvers } = require('./schemas')
const {graphqlUploadExpress } = require('graphql-upload');


// mongoose connection logic
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();



// Apollo server instance
const server = new ApolloServer({
    typeDefs,
    resolvers,
     context: authMiddleware
});

server.applyMiddleware({ app })

// important middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

// port connection
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on the greatest port! ${PORT}!!!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
})