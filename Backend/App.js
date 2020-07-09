const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3001
const routes = require('./Routes/Routes');
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/MeasuresDB";
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use('/api', routes);

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

app.get('/api', (req, res) => {
    res.send('Weight traker..!')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))