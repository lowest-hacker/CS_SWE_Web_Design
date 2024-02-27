import {React, useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';

import BookTable from '../components/BookTable'; 



function CharacterProfilePage({setjob}) {
    const navigate = useNavigate(); 

    const [jobs, setJobs] = useState([]);

    // Retrieving the profile of documents 
    const loadJobs = async() => {
        const response = await fetch('/profile'); 
        const jobs = await response.json(); 
        setJobs(jobs); 
    }

    // Updating 1 document 
    const onEditJob = async jobs => {
        setJobs(jobs); 
        navigate("/edit"); 
    }
    
    //Delete 1 document 
    const onDeleteJob = async id => {
        const response = await fetch(`/profile/${id}`, {method: 'DELETE' })
        if (response.status === 204) {
            const getResponse = await fetch('/profile'); 
            const jobs = await getResponse.json(); 
            setJobs(jobs);
        } else {
            console.error(`Did not delete job with id = ${id}, status code = ${response.status}`)
        }
    }

    //Incorporate useEffect() to load all the documents.
    useEffect( () => {
        loadJobs();
    }, [] ); 

    //Return the HTML to create the user interface (display the jobs)
    return (
        <>
            <h2>List of jobs </h2>
            <p>This is the list of jobs associated with your character profile. </p>
            <p>You can add, edit, and delete jobs using the below buttons. </p>
            <BookTable 
                jobs={jobs}
                onEdit={onEditJob}
                onDelete={onDeleteJob}
            />
        </>
    );
}

export default CharacterProfilePage; 