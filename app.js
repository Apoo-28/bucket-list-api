const express = require('express');
const mongoose = require('mongoose');
const bucketRoutes = require('./routes/bucketRoutes');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') }); 

const app = express();
app.use(express.json());
app.use('/api/bucket', bucketRoutes);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = app;
