exports.run_ejs_loop = function(req,res){
	
	//receiving http get request params in req.query object and rendering them in ejs file
	
	var int = req.query.int;
	
	res.render('ejsloop',{integer : int});
	
	}
