//Dependencies
const Patients = require('./models/register_patients')
const Vistation = require('./models/encounter_patients')
const Vitals = require('./models/vitals_patients')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Server

mongoose.connect('mongodb://localhost:27017')
.then(()=>{
    app.listen(3000)
})


app.post('/add_patients', async (req, res) =>{
    let patient = new Patients({patientID:123, surname: foo});
    patient = await patient.save();
    console.log('Hello');
    res.status(200).send(patient);
})

