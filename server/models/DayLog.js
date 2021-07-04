const { Schema, model } = require('mongoose');
const todaysDate = require('../utils/formatTimeStamp');

const dailyMeasurementsSchema = new Schema ({
    bodyWeight: {
        type: Number,
        default: 0 
    },
    waistCircumference: {
        type: Number, 
        default: 0
    }, 
    bmi: {
        type: Number,
        default: 0
    }, 
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => todaysDate(timestamp)
    }, 
    display_name: {
        type: String,
        required: true
    }
});

const DayLog = model('DayLog', dailyMeasurementsSchema)

module.exports = DayLog;

