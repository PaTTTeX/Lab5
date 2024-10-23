const express = require('express'); // Import express framework
const app = express(); // Create an express application
const port = 3000; // Define the port to listen on

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// handling errors
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(500).send('Something went wrong!'); // Send 500 error response
});

// Route with a URL parameter for greeting by name
app.get('/hello/:name', (req, res) => {
    const name = req.params.name; // Get the name parameter from the URL
    res.send(`Hello ${name}`); // Send greeting with the name
});

// Route for returning a list of movies
app.get('/api/movies', (req, res) => {
    const movies = [ 
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.json({ movies }); // Respond with the movie list in JSON format
});

const path = require('path'); // Import path module

// Route to serve a static HTML file ('index.html')
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Send the index.html file
});

// Route with query parameters for greeting with first and last name
app.get('/name', (req, res) => {
    const firstname = req.query.firstname; // Get firstname from query string
    const lastname = req.query.lastname; // Get lastname from query string
    res.send(`Hello ${firstname} ${lastname}`); // Send greeting with full name
});

const bodyParser = require('body-parser'); // Import body-parser to handle POST requests
app.use(bodyParser.urlencoded({ extended: true })); // parse URL-encoded data

// Route for POST requests to submit name via form
app.post('/name', (req, res) => {
    const firstname = req.body.firstname; // Get firstname from the POST body
    const lastname = req.body.lastname; // Get lastname from the POST body
    res.send(`Hello ${firstname} ${lastname}`); // Send greeting with full name
});
