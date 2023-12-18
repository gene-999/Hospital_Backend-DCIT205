const mongoose = require('mongoose');




const vitals_patients = mongoose.Schema({
    blood_pressure: String,
    temperature: Number,
    Pulse: Number,
    SPO2: Number,
})

const Vitals = mongoose.model('Vital', vitals_patients)

module.exports = Vitals