const express = require('express');
const mongoose = require('mongoose');
const { google } = require('googleapis');
const Response = require('./models/Response');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/freshmankitty', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Google Sheets API setup
const sheets = google.sheets('v4');
const auth = new google.auth.GoogleAuth({
    keyFile: 'path/to/your/service-account-file.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

// Define a route to fetch Google Sheets data
app.get('/responses', async (req, res) => {
    try {
        const authClient = await auth.getClient();
        const response = await sheets.spreadsheets.values.get({
            auth: authClient,
            spreadsheetId: 'your-spreadsheet-id',
            range: 'Sheet1!A1:E',
        });

        const data = response.data.values;
        const responses = data.map(row => ({
            name: row[0],
            hobby: row[1],
            major: row[2],
            year: row[3],
            veteran: row[4] === 'true',
        }));

        await Response.insertMany(responses, { ordered: false });
        res.json(responses);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from Google Sheets');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});