const { Schema, model } = require('mongoose');

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
    }
});

const DayLog = model('DayLog', dailyMeasurementsSchema)

module.exports = DayLog;

