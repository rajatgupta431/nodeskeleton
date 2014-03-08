
var mysql_connection = require('../databases/mysql.js');
var mongo = require('../databases/mongodb.js');

exports.mongodb= function(req,res){
	
	 var new_user = new mongo.user({
		   name : req.query.name,
		   email : req.query.email
		   });
		   new_user.save(function(err){
			   if(!err) {
				   
				   mongo.user.find(function(err,results){
					   if(!err) res.send(results);
					   else res.send(err);
					   })
				   
				   
				   }
				   else res.send(err);
			   
			   });
	
	
	}
	
exports.mysqlGet= function(req,res){
	
	mysql_connection.db.query('create table new_user(name varchar(20), email varchar(100) primary key)', function(err,result) {
  if (err) console.log(err);

 else console.log('The solution is: ', result);

});
//here the params come in req.query object

mysql_connection.db.query('INSERT INTO new_user (name,email) values (?,?)', [req.query.name,req.query.email],function(err, result) {
  if (err) res.send(err);

  console.log('Success ', result);

});

mysql_connection.db.query('Select * from new_user', function(err, rows, fields) {
  if (err) res.send(err);

res.send(rows);
 
});

	
	}
exports.mysqlPost= function(req,res){
	
	mysql_connection.db.query('create table new_user(name varchar(20), email varchar(100) primary key)', function(err,result) {
  if (err) console.log(err);

 else console.log('The solution is: ', result);

});
//here the params come in req.body object

mysql_connection.db.query('INSERT INTO new_user (name,email) values (?,?)', [req.body.name,req.body.email],function(err, result) {
  if (err) res.send(err);

  console.log('Success ', result);

});

mysql_connection.db.query('Select * from new_user', function(err, rows, fields) {
  if (err) res.send(err);

res.send(rows);
 
});

	
	}
