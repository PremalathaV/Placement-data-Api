const express = require('express');
const data = require('./data');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

// API endpoint to filter experiences by company placed in
app.get('/filter/placed/:company', (req, res) => {
    const company = req.params.company.toLowerCase();
    const filteredExperiences = data.filter(exp => {
        const companies = exp.PlacedIn.toLowerCase().split(/, |,/);
        return companies.includes(company);
    });
    res.json(filteredExperiences);
});

// API endpoint to filter experiences by company attended
app.get('/filter/attended/:company', (req, res) => {
    const company = req.params.company.toLowerCase();
    const filteredExperiences = data.filter(exp => {
        const companies = exp.CompaniesAttended.toLowerCase().split(/, |,/);
        return companies.includes(company);
    });
    res.json(filteredExperiences);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
