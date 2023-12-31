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
});


app.post('/add_patients', async (req, res) =>{
    let patient = new Patients(res.body);
    patient = await patient.save();
    res.status(200).send(patient.json());
});

app.post('/vitals_patients', async (req, res) =>{
    let patient = new Vitals(res.body);
    res.status(200).send(patient.json());
});

app.post('/visitation_patients', async (req, res) =>{
    let patient = new Vistation(res.body);
    patient = await patient.save();
    res.status(200).send(patient.json());
});

app.get('/patients',async (req, res) =>{
    const patient = await Patients.find();
    res.status(200).send(patient);
});


app.get('/patients/:id',async (req, res) =>{
    const {id} = req.params
    const patient = await Patients.find({id});
    res.status(200).send(patient.json());
});