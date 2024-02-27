// import dependencies
import React from 'react';
import BookRow from './BookRow.js';
import TableHead from './TableHead.js';
import { HiDocumentAdd } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
function BookTable({jobs, onDelete, onEdit}) {
    const navigate = useNavigate();
    return (
        <table id ="jobs">
            <caption> Add and Edit Character Jobs<HiDocumentAdd onClick={() => navigate("/create")} /></caption>
            <TableHead />
            <tbody>
                {jobs.map((jobs, i) => 
                    <BookRow
                        jobs={jobs}
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />)}
            </tbody>
        </table>
    );
}

export default BookTable;