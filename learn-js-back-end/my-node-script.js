const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let app = express();

app.use(cors());

app.get('/hello', (req, res) => {
    res.send('Hello!');
});

app.get('/products', (req, res) => {
    let client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });

    client.connect(err => {
        if (err) console.log(err);
        const db = client.db('learn-javascript-db');
        db.collection('products').findOne({}, (err, product) => {
            console.log(product);
            res.send(product);
        });
    });
});

app.get('*', (req, res) => {
    res.send('I don\'t know how to respond to this one...');
});

app.listen(8080, function() {
    console.log('Server is listening on port 8080');
});