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

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});

// Import products.js file
const productsData = require('./products.js').products;

// Express middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Function to compare user input with products
function findSelectedProduct(userInput) {
    for (const product of productsData) {
        if (userInput === product.company || userInput === product.product) {
            return product;
        }
    }
    return null; // Return null if no match found
}

// Route to handle form submission
app.post('/submit_order', (req, res) => {
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userAddress = req.body.address;
    const selectedProduct = findSelectedProduct(req.body.product);
    const quantity = req.body.quantity;
    const deliveryInstructions = req.body.instructions;

    // Render the HTML with the provided details
    const htmlResponse = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Order Confirmation</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <h1>Order Confirmation</h1>
            <p>Thank you for your order, ${userName}!</p>
            <p>Your selected product: ${selectedProduct.product}</p>
            <p>Quantity: ${quantity}</p>
            <p>Delivery Instructions: ${deliveryInstructions}</p>
            <!-- Add any additional details as needed -->
        </body>
        </html>
    `;

    res.send(htmlResponse);
});

// Start the server
app.listen(3000, () => {
   console.log(`Server is running at http://localhost:3000`);
});

// Express middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Function to compare user input with products
function findSelectedProduct(userInput) {
    for (const product of productsData) {
        if (userInput === product.company || userInput === product.product) {
            return product;
        }
    }
    return null; // Return null if no match found
}

// Route to handle form submission
app.post('/submit_order', (req, res) => {
    const userName = req.body.name;
    const userAddress = req.body.address;
    const deliveryInstructions = req.body.instructions;
    const selectedProduct = findSelectedProduct(req.body.product);
    const companyName = selectedProduct.company;
    const quantity = parseInt(req.body.quantity);
    
    // Calculate total price and format as US currency
    const totalPrice = quantity * selectedProduct.price;
    const formattedTotalPrice = totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    // Render the HTML response with the provided details and calculations
    const htmlResponse = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Order Confirmation</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <h1>Order Confirmation</h1>
            <p>Dear ${userName},</p>
            <p>Thank you for placing an order with us! We have received the following details:</p>
            <p><strong>Name:</strong> ${userName}</p>
            <p><strong>Address:</strong> ${userAddress}</p>
            <p><strong>Delivery Instructions:</strong> ${deliveryInstructions}</p>
            <p><strong>Product Choice:</strong> ${selectedProduct.product} by ${companyName}</p>
            <p><strong>Quantity:</strong> ${quantity}</p>
            <p><strong>Total Price:</strong> ${formattedTotalPrice}</p>
            <p>We appreciate your business and look forward to serving you.</p>
        </body>
        </html>
    `;

    res.send(htmlResponse);
});

// Start the server
app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
});


