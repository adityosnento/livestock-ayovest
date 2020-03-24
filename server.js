require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const index = path.resolve(__dirname, 'build', 'index.html');
const port = process.env.PORT || 9000;
//production
app.use(express.static('build'));
app.get('/*', (req, res) => {
    res.sendFile(index);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})