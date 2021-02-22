const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger/swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use('/*', express.static(`${__dirname}/${build}`));

app.use(function (req, res, next) {
    console.log(req.method, req.path, "-", req.ip);
    next();
});

app.set('view engine', 'ejs');

const { user, admin } = require('./routes');
app.use('/api/v1/', user);
app.use('/admin', admin);

// Connecting to the database
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})