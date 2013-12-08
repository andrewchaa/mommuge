var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mommuge');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var schema = new mongoose.Schema({
	weight: [Number],
	unit: [String],
	ofDate: [Date]
	});

module.exports = mongoose.model('Measure', schema);

