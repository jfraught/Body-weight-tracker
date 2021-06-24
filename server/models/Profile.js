const { Schema } = require('mongoose');

progressPics = new Schema ({
    initialFront: {
        type: String,
        required: true
    },
    initialSide: {
        type: String,
        required: true
    },
    initialBack: {
        type: String,
        required: true
    },
    currentFront: {
        type: String
    }, 
    currentSide: {
        type: String
    }, 
    currentBack: {
        type: String
    }
})

profileSchema = new Schema({
    height: {
        type: Int,
        required: true,
        default: 0
    },
    goalWeight: {
        type: Int,
        default: 0
    },
    goalWaist: {
        type: Int,
        default: 0
    }, 
    goalBMI: {
        type: Int,
        default: 0
    }, 
    progress: [progressPics]
});

module.exports = profileSchema;