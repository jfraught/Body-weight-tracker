const { Schema, model} = require('mongoose');
 

userSchema = new Schema({
email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
},
 password: {
     type: String,
     required: true,
     minlength: 8
 }


})


module.exports = userSchema;