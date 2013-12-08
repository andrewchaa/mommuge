exports.get = function(req, res) {
	var moment = require('moment');
	var Measure = require('../models/Measure');

	Measure.find({}, function(err, measures) {

		console.log(measures);
		res.render('review', { measures : measures, moment : moment });

	});

};