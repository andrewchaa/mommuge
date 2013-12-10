var mongoose = require('mongoose');
var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mommuge';
mongoose.connect(mongoUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var schema = new mongoose.Schema({
	weight: [Number],
	unit: [String],
	ofDate: [Date]
	});

module.exports = mongoose.model('Measure', schema);

