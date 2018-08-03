const http = require('http');
const application = require('./application');
const constantes = require('../library/constantes');
const port = process.env.PORT || 3002;
const server = http.createServer(application);
server.listen(port, function () {
  var host = constantes.getServerIpAddress();
  var port = server.address().port
  var intervalObj = setInterval(() => {
    constantes.declareService(constantes.MSTypeEnum.afoPaniers, host, port, constantes.MSPathnameEnum.afoPaniers);
  }, 10000);
  console.log("SelectionsSrv listening at http://%s:%s", host, port)
});
console.log('RESTful API server started on: ' + port);

