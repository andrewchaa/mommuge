exports.submit = function() {
	return function(req, res, next) {
		// var weight = req.weight;
		// console.log(req);
		console.log('test');

		res.redirect('/');
		return;
	};
};