// Imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// EDIT function
function EditPage({jobs}) {
    const [jobname, setJobsName] = useState(jobs.jobname);
    const [currentjoblvl, setJobslvl] = useState(jobs.currentjoblvl);
    const [jobclassification, setClassification] = useState(jobs.jobclassification);
    const [dateAchieved, setDateAchieved] = useState(jobs.dateAchieved.slice(0,10));

    const navigate = useNavigate();

    const editJobs = async () => {
        let response = await fetch(`/profile/${jobs}`, {
            method: 'PUT',
            body: JSON.stringify({
                jobname: jobname,
                currentjoblvl: currentjoblvl,
                jobclassification: jobclassification,
                dateAchieved: dateAchieved,
            }),
            headers: {
                'content-type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Character profile edit successful!");
        }
        else {
            const eMessage = await response.json();
            alert(`Cannot edit character profile. Status ${response.status}. ${eMessage.error}`);
        }
        navigate("/profile");
    };
    return (
        <>
            <h2>Edit Character Profile</h2>
            <p>Use the icons to edit a job row of the profile.</p>

            <table id="jobs">
                <caption>Edit a Character Profile.</caption>
                <thead>
                    <tr>
                        <th>Job Name</th>
                        <th>Current Job Level</th>
                        <th>Job Classification</th>
                        <th>Date Achieved</th>
                        <th>Save</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                            <td>
                                <label for="rejobname" class="Required">
                                    <input type="text" value={jobname} id="rejobname" name="jobname"
                                    onChange={e => setJobsName(e.target.value)} required
                                    />
                                </label>
                            </td>
                            <td>
                                <label for="recurrentjoblvl" class="Required">
                                    <input type="number" value={currentjoblvl} id="recurrentjoblvl" name="currentjoblvl"
                                    onChange={e => setJobslvl(e.target.value)} required
                                    />
                                </label>
                            </td>
                            <td>
                                <label for="rejobclassification" class="Required">
                                    <input type="text" value={jobclassification} id="rejobclassification" name="jobclassification" 
                                    onChange={e => setClassification(e.target.value)} required
                                    autofocus
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
                            <td><button class="wait" onClick={editJobs}>Save</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default EditPage;