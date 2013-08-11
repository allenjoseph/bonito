exports.findAll = function(req, res){
	res.json({articles: articleRepository.findAll});
};

exports.find = function(req, res){
	try{
		res.json(articleRepository.find(req.params.id));
	} catch(err){
		console.log(err.message);
		res.send(404);
	}
};

exports.create = function(req,res){
	var article = req.body;
	articleRepository.save(article);
	res.send(200);
};

exports.update = function(req,res){
	var tareaput = req.body;
	var tareaId = req.params.id;
	try{
		var tareaPersistida = articleRepository.find(tareaId);
		var article = {
			tareaId : tareaPersistida.tareaId,
			titulo : tareaput.titulo || tareaPersistida.titulo,
			descripcion : tareaput.descripcion || tareaPersistida.descripcion,
			estado : tareaput.estado || tareaPersistida.estado
		};
		articleRepository.save(article)
		res.send(200);
	} catch(err){
		console.log(err.message);
		res.send(404);
	}
};

exports.delete = function(req,res){
	try{
		var tareaId = req.params.id;
		console.log(tareaId);
		articleRepository.remove(tareaId);
		res.send(200);
	} catch(err){
		console.log(err.message);
		res.send(404);
	}
};
