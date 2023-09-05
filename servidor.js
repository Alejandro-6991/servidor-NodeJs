const http = require('http');
const chalk = require('chalk');

const host = 'localhost';
const puerto = 8080; 

const servidor = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    const respuesta = JSON.stringify({ nombre: 'AlejandroHernandez', mensaje: 'Saludos servidor funcional' });
    res.end(respuesta);
  });
  

  servidor.listen(puerto, host, () => {
    console.log(chalk.green(`El servidor corriendo http://${host}:${puerto}`));
  });
  