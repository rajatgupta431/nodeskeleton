var mongo = require('mongoose').connect('mongodb://localhost/test') ;
var Schema = mongo.Schema;
var userSchema = new Schema({
	name : String,
     email : String});
     
   exports.user = mongo.model('user',userSchema);
