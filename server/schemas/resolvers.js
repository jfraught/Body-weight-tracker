const {User, Profile, DayLog} = require('../models');
const { AuthenticationError} = require('apollo-server-express');
const { signToken } = require('../utils/authorize');
const { createWriteStream } = require('fs');
const { GraphQLUpload } = require('graphql-upload');
const { parse, join } = require('path');
// may or may not need this
const { URL } = require('../config/connection')

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
    },

    uploads: (parent, args) => {}



  }, 
   
  Mutation: {
      addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user)
  // changed from ({}) to {}
          return  {  token, user }  ;
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
      Upload: GraphQLUpload,
      addProgressPics:  async (_, { file }) => {
        let { filename, createReadStream } = await file;
        let stream = createReadStream();
        let { name, ext } = parse(filename);
        name = name.replace(/([^a-z0-9 ]+)/gi, "-").replace(" ", "_");
        let serverFile = `D:/${name}${ext}`;
        let writeStream = await createWriteStream(serverFile);
        await stream.pipe(writeStream);
        //serverFile = `${URL}/${serverFile.split("uploads")[1]}`;
        return serverFile;
      },
    
      
      
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