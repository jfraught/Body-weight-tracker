const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.API_KEY ;
const expiration = '2h';

/*module.exports = {
    signToken: function({ name, email, _id  }) {
        const payload = { name, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },

    authMiddleware: function({ req }) {
        // allows token to be sent via req.body, req.query, or headers
        let token = req.body.token  || req.query.token || req.headers.authorization;

        // seperate "Bearer" from <tokenvalue>
        if (req.headers.authorization) {
            token = token
            .split( ' ' )
            .pop()
            .trim();
            console.log("token", token)
        }

        // if no token, return request object as is
        if(!token) {
            return req;
        }

        try {
            // decode and attach user data to request object
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        }catch {
            console.log('invalid token');
        }
        // return updated request object
        return req;
        
    }
    
};*/

module.exports = {
    authMiddleware: function ({ req }) {
      // allows token to be sent via req.body, req.query, or headers
      let token = req.body.token || req.query.token || req.headers.authorization;
  
      // ["Bearer", "<tokenvalue>"]
      if (req.headers.authorization) {
        token = token
          .split(' ')
          .pop()
          .trim();
      }
  
      console.log("token", token)
  
  
      if (!token) {
        return req;
      }
  
      try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
      }
      catch {
        console.log('Invalid token');
      }
  
      return req;
    },
    signToken: function ({ name, email, _id }) {
      const payload = { name, email, _id };
  
      return jwt.sign(
        { data: payload },
        secret,
        { expiresIn: expiration }
      );
    }
  };