const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/query', async (req, res) => {
    const walletAddress = req.query.wallet;
    try {
        const response = await axios.get(`https://www.innersphere.io/api/query?wallet=${walletAddress}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error in proxy server:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = app;
