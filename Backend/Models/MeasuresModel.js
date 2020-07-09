const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/MeasuresDB")
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(('could not connect'), err));

const Schema = mongoose.Schema;

const MeasureSchema = new Schema(
    {
        weight: Number,
        height: Number,
        BMI: Number,
        date: Date
    }
);

const Measures = mongoose.model('Measure', MeasureSchema);

async function createMeasure(weight, height, BMI, date) {
    let measures = new Measures({
        weight,
        height,
        BMI,
        date
    });
    try {
        const result = await measures.save();
    } catch (ex) {
        for (field in ex.errors)
            console.log(ex.errors[field]);
    }
}
createMeasure(84, 170, 33, new Date());

module.exports = Measures;