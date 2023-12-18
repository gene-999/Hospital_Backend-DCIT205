const mongoose = require('mongoose');



const register_patients = mongoose.Schema({
    patientID: Number,
    surname: String,
    othernames: String,
    Gender: String,
    phone_number: Number,
    residential_address: String,
    emergency_name: String,
    emergency_contact: Number,
    relationship_with_patients: String,     
})

const Patients = mongoose.model('Patient', register_patients)

module.exports = Patients