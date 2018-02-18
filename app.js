
const  express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const http = require('http');


const app = express();

app.use(logger('dev'));

// app.use(bodyParser.json);
// app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to More Recipes',
}));

const server = http.createServer(app);
server.listen(8000, () => console.log('Server Operational') );

module.exports = app;