const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Create an API route to fetch weather data
app.get('/weather', async (req, res) => {
    try {
        const { location } = req.query;
        if (!location) {
            return res.status(400).json({ error: 'Location not provided' });
        }

        const apiUrl = `https://vejr.eu/api.php?location=${location}&degree=C`;
        const response = await axios.get(apiUrl);

        if (!response.data) {
            return res.status(500).json({ error: 'Failed to fetch data' });
        }

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
