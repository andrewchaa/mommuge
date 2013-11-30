var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mommuge');

var schema = new mongoose.Schema({
	weight: [Number]
	});

module.exports = mongoose.model('Measure', schema);