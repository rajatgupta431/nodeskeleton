exports.rest_one = function(req,res){
	
	//receiving http get request params in req.query object and responding with the json
	var string = req.query.string;
	var int = req.query.int;
	
	res.json({string: string, int : int});
	
	}
