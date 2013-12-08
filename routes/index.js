exports.submit = function() {

	var Measure = require('../models/Measure')

	return function(req, res, next) {
		Measure.create({
			weight: req.body.weight,
			unit: req.body.unit,
			ofDate: Date.now()
		}, function(err) {
			if (err) return next(err);	
	
			res.redirect('/review');
		});
	};
};

exports.get = function(req, res) {
	res.render('index', {title: 'test'});
};