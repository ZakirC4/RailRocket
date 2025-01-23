const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get('/drinks', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'drinks.html'));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 80;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
