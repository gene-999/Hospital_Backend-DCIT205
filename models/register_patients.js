const mongoose = require('mongoose');




const register_patients = mongoose.Schema({
    patientID: Number,
    surname: String,
        
})

const Patients = mongoose.model('Patient', register_patients)

module.exports = Patients