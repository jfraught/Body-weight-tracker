const {User, Profile, DayLog} = require('../models');
const { AuthenticationError} = require('apollo-server-express');
const { signToken } = require('../utils/authorize');

const resolvers = {
  Query: {
      user: async (parent, args, context) => {
          if (context.user) {
              const userData = await User.findOne({_id: context.user._id})
              .select('-__v -password')
              
              return userData
          }
          throw new AuthenticationError('not logged in');
    },

    profile: async (parent, {_id}) => {
    return    Profile.findOne({_id})
    },

    daylog: async(parent, {_id}) => {
        return DayLog.findOne({_id})
    }



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

      },
      addProfile: async (parent, args) => {
          const profile = Profile.create({args});
          return profile
      },
      
  }
};

module.exports = resolvers;