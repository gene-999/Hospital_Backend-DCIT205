const mongoose = require('mongoose');




const encounter_patients = mongoose.Schema({
    patientID: Number,
    date_and_time: String,
    Type_of_encounter: String,
})

const Vistation = mongoose.model('Encounter', encounter_patients)

module.exports = Vistation