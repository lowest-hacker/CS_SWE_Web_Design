// Controllers for the job Collection

import 'dotenv/config';
import express from 'express';
import * as jobs from './ff14character-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/jobs', (req,res) => { 
    jobs.createjob(
        req.body.jobname, 
        req.body.currentjoblvl, 
        req.body.jobclassification,
        req.body.dateAchieved
        )
        .then(job => {
            console.log(`"${job.title}" was added to your character profile.`);
            res.status(201).json(job);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Could not find character to add to profile.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/jobs', (req, res) => {
    jobs.retrievejob()
        .then(job => { 
            if (job !== null) {
                console.log(`All jobs were retrieved from the collection.`);
                res.json(job);
            } else {
                res.status(404).json({ Error: 'Unable to retrieve your character profile.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Unable to locate your character profile.' });
        });
});


// RETRIEVE by ID controller
app.get('/jobs/:_id', (req, res) => {
    jobs.retrievejobByID(req.params._id)
    .then(job => { 
        if (job !== null) {
            console.log(`"${job.title}" was retrieved, based on its ID.`);
            res.json(job);
        } else {
            res.status(404).json({ Error: 'Unable to locate the job from your character profile based on the ID.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to locate your character profile.' });
    });

});


// UPDATE controller ************************************
app.put('/jobs/:_id', (req, res) => {
    jobs.updatejob(
        req.params._id, 
        req.body.jobname, 
        req.body.currentjoblvl, 
        req.body.jobclassification,
        req.body.dateachieved
    )
    .then(job => {
        console.log(`"${jobs.jobname}" was updated.`);
        res.json(job);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to find the specified job to update. Please create prior to updating.' });
    });
});


// DELETE Controller ******************************
app.delete('/jobs/:_id', (req, res) => {
    jobs.deletejobById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} job was deleted from your character profile.`);
                res.status(200).send({ Success: 'Character profile successfully updated.' });
            } else {
                res.status(404).json({ Error: 'Unable to delete specified job due to it not being found within your character profile.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Unable to delete specified job due to it not being found within your character profile.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});