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
    let patient = new Patients(req.body);
    patient = await patient.save();
    res.status(201).json(patient);
});
app.get('/', async (req,res) =>{
    let patient = await Vitals.find()
    console.log(patient) 
     res.status(200).json({mssg: "hgyhfjkh!!!"})
    
})
app.post('/vitals_patients', async (req, res) => {
    let patient = new Vitals(req.body);
    patient = await patient.save();
    res.status(200).send(patient);
});

app.post('/visitation_patients', async (req, res) =>{
    let patient = new Vistation(req.body);
    patient = await patient.save();
    res.status(200).send(patient);
});

app.get('/patients',async (req, res) =>{
    const patient = await Patients.find();
    console.log(patient);
    res.status(200).json(patient);
});


app.get('/patients/:id',async (req, res) =>{
    const {id} = req.params
    if(mongoose.isValidObjectId(id)){
      const patient = await Patients.findById(id);
    return res.status(200).send(patient);  
    }
    
        res.status(404).json({err: "no patient found"}); 
    
    
});

app.put('/patients/:id', async (req, res) =>{
    const {id} = req.params
    if(mongoose.isValidObjectId(id)){
        const patient = await Patients
        .findById({ _id: id})
        .updateOne(req.body)
        .exec();
        return res.status(200).json(patient);
    }
    res.status(404).json({err: "no patient found"});
}
);

app.delete('/patients/:id', async (req, res) =>{
    const {id} = req.params
    if(mongoose.isValidObjectId(id)){
        const patient = await Patients
        .findById({ _id: id})
        .deleteOne()
        .exec();
        return res.status(200).json(patient);
    }
    res.status(404).json({err: "no patient found"});
}
);