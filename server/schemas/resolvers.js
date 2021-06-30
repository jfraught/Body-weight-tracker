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
          throw new AuthenticationError('Not logged in');
    },
    users: async () => {
        return User.find();
    },

    profile: async (parent, {_id}) => {
    return    Profile.findOne({_id})
    },
    profiles: async () => {
        return Profile.find();
    },

    daylog: async(parent, {_id}) => {
        return DayLog.findOne({_id})
    },
    daylogs: async () => {
        return DayLog.find();
    }



  },  
  // mutation logic
  Mutation: {
      addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user)

          return ({ token, user });
      },
      login: async (parent, { email, password} ) => {
          const user = await User.findOne({ email });

          if(!user) {
              throw new AuthenticationError('Incorrect credentials')
          }
          const correctPw = await user.isCorrectPassword(password);

          if(!correctPw) {
              throw new AuthenticationError('incorrect credentials')
          }

          const token = signToken(user);
          return ({ token, user });

      },
      addProfile: async (parent, {height, goalWeight, goalWaist, goalBMI}) => {
          const profile = Profile.create({height, goalWeight, goalWaist, goalBMI});
          return profile;
      },
      addDayLog: async (parent, {bodyWeight, waistCircumference, bmi}) => {
const dayLog = DayLog.create({bodyWeight, waistCircumference, bmi});
return dayLog;
      },
  }
};

module.exports = resolvers;