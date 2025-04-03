const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS

const app = express();
const port = 3000;

// Use CORS to allow cross-origin requests
app.use(cors());

// Middleware for parsing JSON data in requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Replace with your MySQL username
  password: 'Sirjejely@79',  // Replace with your MySQL password
  database: 'myportfolio'  // Replace with your database name
});

// Connect to MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

// Define route to handle form submissions
app.post('/send-message', (req, res) => {
  const { name, email, message } = req.body;

  // Insert message into the database
  const query = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
  db.query(query, [name, email, message], (err, results) => {
    if (err) {
      console.error("Error inserting message:", err);
      return res.status(500).json({ success: false, error: 'Failed to send message' });
    }
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
