const { Schema, model } = require('mongoose');

const dailyMeasurementsSchema = new Schema ({
    weight: {
        type: String,
        default: 0 
    },
    waist: {
        type: String, 
        default: 0
    }, 
});

const DayLog = model('DayLog', dailyMeasurementsSchema)

module.exports = DayLog;

