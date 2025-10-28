const express = require('express') // Import the express module
const app = express() // Create an express application
const port = 3000 // Define the port number for the server


// Middleware to serve static files from the 'public' directory
app.use(express.static('public'))


// Define a route for the root URL
app.get('/', (req, res) => {
res.send('Hello World!') // Send a plain text response
})


// Define a route for the About page
app.get('/about', (req, res) => {
res.send('About us') // Send About page information
})


// Define a route for the Contact page
app.get('/contact', (req, res) => {
res.send('Hello contact me!') // Send Contact page information
})


// Define a route for the Blog main page
app.get('/blog', (req, res) => {
res.send('Hello blog!') // Send Blog main page content
})


// Dynamic route using slug parameter
app.get('/blog/:slug', (req, res) => {
// Log route parameters and query strings
console.log(req.params) // Example: { slug: 'intro-to-padosi' }
console.log(req.query) // Example: { mode: 'dark', region: 'in' }


// Send a dynamic response based on slug
res.send(`hello ${req.params.slug}`)
})


// Start the server and listen on the specified port
app.listen(port, () => {
console.log(`Example app listening on port ${port}`) // Log server start confirmation
})
