var mysql      = require('mysql');
connection = mysql.createConnection({
  host     : 'homewire.c23x6fqoltah.us-east-1.rds.amazonaws.com:3306',
  user     : 'homewire',
  password : 'gv2eKiiVdPz2Xb',
  database: 'Homewire'
});
connection.connect();
exports.db= connection;
