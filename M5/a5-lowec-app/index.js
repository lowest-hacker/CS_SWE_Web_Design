'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public')); 

let htmlTop = `
   <!doctype html>
   <html lang="en">
   <head>
   <title>Contact Form Results</title>
   <!-- Additional head tags and styles go here -->
   </head>
   <body>
   <header>
   <!-- Your header content goes here -->
   </header>
   <nav>
   <!-- Your navigation menu goes here -->
   </nav>
   <main>
`;

let htmlBottom = `
   </main>
   <footer>
   <!-- Your footer content goes here -->
   </footer>
   </body>
   </html>
`;


app.post('/submit_form', (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const category = req.body.category;
    const contactMethod = req.body.contact_method;
    const interests = req.body.interests || []; 

    const response = `
       <h1>Contact Form Results</h1>
       <p>Name: ${name}</p>
       <p>Email: ${email}</p>
       <p>Message: ${message}</p>
       <p>Category: ${category}</p>
       <p>Contact Method: ${contactMethod}</p>
       <p>Interests: ${interests.join(', ')}</p>
   `;

   res.send(`${htmlTop}${response}${htmlBottom}`);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
