const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/public/staticServer.html');
})

const ssrPage = fs.readFileSync('public/serverSideRendered.html', 'utf8');

app.get('/ssr', (req, res) => {
    return res.send(ssrPage);
})

const PORT = process.env.PORT || 80;

// #############################################
app.listen(PORT, (err, res) => {
    return err ? console.log('Server error') : console.log('Server listening on port ' + PORT);
});