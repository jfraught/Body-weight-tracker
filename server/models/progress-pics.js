const { Schema, model } = require('mongoose');

const progressPicsSchema = new Schema ({
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
});



module.exports = progressPicsSchema;