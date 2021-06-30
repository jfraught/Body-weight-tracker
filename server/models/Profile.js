const { Schema, model } = require('mongoose');
const progressPicsSchema= require('./progress-pics');



const profileSchema = new Schema({
    height: {
        type: Number,
        required: true,
        default: 0
    },
    goalWeight: {
        type: Number,
        default: 0
    },
    goalWaist: {
        type: Number,
        default: 0
    }, 
    goalBMI: {
        type: Number,
        default: 0
    }, 
    progress: [progressPicsSchema]
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;