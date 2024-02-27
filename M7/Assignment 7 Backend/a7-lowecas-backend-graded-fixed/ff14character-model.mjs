// Models for the job Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Unable to find and connect to the database holding your character profile.' });
    } else  {
        console.log('Successfully connected to the database holding your character profile.');
    }
});

// SCHEMA: Define the collection's schema.
const jobSchema = mongoose.Schema({
	jobname:    { type: String, required: true },
	currentjoblvl:     { type: Number, required: true },
	jobclassification: { type: String, required: true },
    dateAchieved: { type: Date, required: true}
});

// Compile the model from the schema 
// by defining the collection name "jobs".
const jobs = mongoose.model('Job', jobSchema);


// CREATE model *****************************************
const createjob = async (jobname, currentjoblvl, jobclassification, dateAchieved) => {
    const job = new jobs({ 
        jobname: jobname, 
        currentjoblvl: currentjoblvl, 
        jobclassification: jobclassification,
        dateAchieved: dateAchieved 
    });
    return job.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrievejob = async () => {
    const query = jobs.find();
    return query.exec();
}

// RETRIEVE by ID
const retrievejobByID = async (_id) => {
    const query = jobs.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deletejobById = async (_id) => {
    const result = await jobs.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updatejob = async (_id, jobname, jobclassification, dateAchieved) => {
    const result = await jobs.replaceOne({_id: _id }, {
        jobname: jobname, 
        currentjoblvl: currentjoblvl, 
        jobclassification: jobclassification,
        dateAchieved: dateAchieved 
    });
    return { 
        _id: _id,
        jobname: jobname, 
        currentjoblvl: currentjoblvl, 
        jobclassification: jobclassification,
        dateAchieved: dateAchieved 
    }
}

// EXPORT the variables for use in the controller file.
export { createjob, retrievejob, retrievejobByID, updatejob, deletejobById }