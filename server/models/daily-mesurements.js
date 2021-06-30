const { Schema, model } = require('mongoose');

const dailyMeasurementsSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now,
        min: '2021-01-01', 
        max: '2022-01-01',
        required: true
    },
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

