const {User, DayLog } = require('../models');
const { AuthenticationError} = require('apollo-server-express');
const { signToken } = require('../utils/authorize');

const resolvers = {
  Query: {
    user: async (parent, { display_name }) => {
        return User.findOne({ display_name })
            .select('-v -password')
            .populate('dayLogs')
    },
    
    users: async () => {
        return User.find()
            .select('-v -password')
            .populate('dayLogs')
    },
    /*daylog: async () => {
        return DayLog.findOne({_id})
    },*/

    dayLogs: async (parent, { display_name }) => {
        const params = display_name ? { display_name } : {};
        return DayLog.find(params)
            .populate('dayLogs');
    }
  },
   
  Mutation: {
      addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user)
           //({})
          return { token, user };
      },
      login: async (parent, { display_name, password} ) => {
          const user = await User.findOne({ display_name });

          if(!user) {
              throw new AuthenticationError('Incorrect credentials')
          }
          const correctPw = await user.isCorrectPassword(password);

          if(!correctPw) {
              throw new AuthenticationError('incorrect credentials')
          }

          const token = signToken(user);
          // ({})
          return { token, user };

      },
      addDayLog: async (parent, args, context) => {
        if (context.user) {
            const dayLog = await DayLog.create({ ...args, display_name: context.user.display_name });

            await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { dayLogs: dayLog._id } },
                { new: true }
            );

            return dayLog;
        }
      }   
  }
};

module.exports = resolvers;




/** (parent, args) => {
        return args.file.then(file => {
            //Contents of Upload scalar: https://github.com/jaydenseric/graphql-upload#class-graphqlupload
            //file.createReadStream() is a readable node stream that contains the contents of the uploaded file
            //node stream api: https://nodejs.org/api/stream.html
            return file;
          });
        }, original from apollo-upload-client*/

        // graphql upload boiler
        /** async (root, { name, file }) => {
        const { filename, mimetype, createReadStream } = await file;
        const stream = createReadStream();
        // Promisify the stream and store the file, then ...
        return true;
      }, */