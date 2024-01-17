// server.js

const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/match', (req, res) => {
    const menteeData = req.body;
    const pythonProcess = spawn('python', ['mentor_matching_algorithm.py']);

    pythonProcess.stdout.on('data', (data) => {
        const mentors = JSON.parse(data.toString());
        // Filter mentors based on specialization
        const filteredMentors = mentors.filter(mentor => mentor.specialization.toLowerCase() === menteeData.specialization.toLowerCase());
        res.json({ mentors: filteredMentors });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
