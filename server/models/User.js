const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    display_name:  {
        type: String,
        unique: true
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
     },
     dayLogs:  [ 
         {
            type: Schema.Types.ObjectId,
            ref: 'DayLog'
         } 
]
},
{
    toJSON: {
        virtuals: true
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