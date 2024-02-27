
// Import dependencies
import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function BookRow({jobs, onDelete, onEdit}) {
    return (
        <tr> 
            <td>{jobs.jobname}</td>
            <td>{jobs.currentjoblvl}</td>
            <td>{jobs.jobclassification}</td>
            <td>{jobs.dateAchieved.slice(0,10)}</td>
            <td><MdDeleteForever onClick={() => onDelete(jobs)} /></td>
            <td><MdEdit onClick={() => onEdit(jobs)} /></td>
        </tr>
    );
}

export default BookRow;