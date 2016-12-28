var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	// Get the geolocation
	// Query for businesses within the geolocational area
	try {
		const db = req.app.locals.db;
		var businesses = db.collection('landmarks');
		


	} catch (err) {
		console.log("ERRRRROOOOO");
		next(err);
	}
	
});


module.exports = router;