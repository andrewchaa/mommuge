var Measure = require('../models/Measure')

exports.submit = function() {
	return function(req, res, next) {
		// var weight = req.weight;
		// console.log(req);
		console.log(req.body);

		Measure.create({
			weight: req.body.weight
		}, function(err) {
			if (err) return next(err);	
	
			res.redirect('/');
		});
	};
};