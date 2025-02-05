const express = require('express');
const bodyParser = require('body-parser');
const calculatorRoutes = require('./routes/calculatorRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/calculator', calculatorRoutes);

app.listen(PORT, () => {
    console.log(`Calculator API is running on port ${PORT}`);
});