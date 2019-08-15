const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

const messages = [];
var count = 0;

app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
})

app.use(express.json());

app.get('/messages', (req, res) => {
    console.log('GET resquested')
    res.send(JSON.stringify(messages));
})

app.post('/messages', (req, res) => {
    console.log(messages)
    console.log(req.body)
    let body = req.body;
    body.id = count;
    count++;
    if (body.hasOwnProperty('talk') && body.hasOwnProperty('talker')) {
        messages.push(body)
    }
    res.send(JSON.stringify(body))
})

app.use((err, req, res, next) => {
    console.error(err);
    res.status(404).send('page cannot be found')
})

app.listen(PORT, () => {
    console.log(`Live server connected at ${PORT}`)
});