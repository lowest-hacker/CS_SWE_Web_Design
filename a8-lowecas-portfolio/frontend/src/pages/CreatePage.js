import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import {}

function CreatePage() {
    const [jobname, setName] = useState('');
    const [currentjoblvl, setDescription] = useState(1);
    const [jobclassification, setClassification] = useState('');
    const [dateAchieved, setDateAchieved] = useState();

    const navigate = useNavigate();

    const addJob = async () => {
        const newJob = {jobname, currentjoblvl, jobclassification, dateAchieved};
        const res = await fetch('/profile', {
            method:'POST',
            body: JSON.stringify(newJob),
            headers: {
                'content-type': 'application/json',
            },
        });

        if (res.status === 201) {
            alert("Successfully added a job to a row in your character profile.");
        } else {
            alert("Failed to add a new job");
        }
        navigate("/profile");
    };
    return (
        <>
            <h2>Add a Character Job.</h2>
            <article>
                <p>
                    Add a newly opened job to your character profile.
                </p>
                <table id="jobs">
                    <caption>Add a new job to your character profile.</caption>
                    <thead>
                        <tr>
                            <th>Job Name</th>
                            <th>Current Job Level</th>
                            <th>Job Classification</th>
                            <th>Date Job Level Acheived</th>
                            <th>Save</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label for="rename" class="Required">
                                    <input type="text" value={jobname} id="rename" job="jobname" 
                                    onChange={e => setName(e.target.value)} required
                                    autofocus
                                    />
                                </label>
                            </td>
                            <td>
                                <label for="recurrentjoblvl" class="Required">
                                    <input type="number" value={currentjoblvl} id="recurrentjoblvl" name="currentjoblvl"
                                    onChange={e => setDescription(e.target.value)} required
                                    />
                                </label>
                            </td>
                            <td>
                                <label for="jobclassification" class="Required">
                                    <input type="text" value={jobclassification} id="rejobclassification" name="jobclassification"
                                    onChange={e => setClassification(e.target.value)} required
                                    />
                                </label>
                            </td>
                            <td>
                                <label for="redateAchieved" class="Required">
                                    <input type="date" value={dateAchieved} id="redateAchieved" name="dateAchieved"
                                    pattern="\d{2}-\d{2}-\d{2}"
                                    onChange={e => setDateAchieved(e.target.value)} required
                                    />
                                </label>
                            </td>
                            <td><button class="wait" onClick={addJob}>Save</button></td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );

}

export default CreatePage;