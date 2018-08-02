const express = require('express');
const application = express();

const apiSelectionsRoutes = require('./APISelections');
application.use('/api/selections', apiSelectionsRoutes);

const apiHealthRoutes = require('./APIHealth');
application.use('/health', apiHealthRoutes);

module.exports = application;