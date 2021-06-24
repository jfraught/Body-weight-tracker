const { Schema } = require('mongoose');

dailyMeasurementsSchema = new Schema ({
    date: {
        type: Date,
        min: '2021-01-01', 
        max: '2022-01-01',
        required: true
    },
    bodyWeight: {
        type: Int,
        default: 0 
    },
    waistCircumference: {
        type: Int, 
        default: 0
    }, 
    bmi: {
        type: Int,
        default: 0
    }
});

module.exports = dailyMeasurementsSchema;

