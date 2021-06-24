const {User, /*Profile, DayLog*/} = require('../models');
const { AuthenticationError} = require('apollo-server-express');
const { signToken } = require('../utils/authorize');

const resolvers = {
  Query: {

  },  
  // mutation logic
  Mutation: {
      addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user)

          return (token, user);
      },
      login: async (parent, {email, password}) => {
          const user = await User.findOne({email});

          if(!user) {
              throw new AuthenticationError('Incorrect credentials')
          }
          const correctPw = await user.isCorrectPassword(password);

          if(!correctPw) {
              throw new AuthenticationError('incorrect credentials')
          }
          const token = signToken(user);

          return { token, user };

      }
  }
};

module.exports = resolvers;