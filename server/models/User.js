const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new Schema({
<<<<<<< HEAD
name:  {
    type: String,
    
=======
display_name:  {
    type: String
>>>>>>> 32eaf02b9269c63327bb630473f93a1fd3f1df3b
},
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


}

)

// middleware pre-save for creating the hashed password
userSchema.pre('save', async function(next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// this will compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);
module.exports = User;