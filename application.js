const express = require('express');
const application = express();

const apiSelectionsRoutes = require('./APISelections');
application.use('/api/selections', apiSelectionsRoutes);

module.exports = application;