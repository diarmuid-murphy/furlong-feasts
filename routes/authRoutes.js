const router = require('express').Router();
const db = require('../models');

// router.get('/', (req, res) => {
// 	console.log('Got this far.');
// 	res.send('Got this far.');
// });

router.post('/', (req, res) => {
	console.log(req.body.email);

	console.log();

	if (process.env.PASSWORD === req.body.password) {
		console.log('Party!');

		db.User.findOneAndUpdate(
			{ email: req.body.email },
			{ name: req.body.name, email: req.body.email },
			{ new: true, upsert: true }
		).then((user) => {
			res.status(200).send(user);
		});
	} else {
		res.status(403).send('Unauthorized access.')
	}
});

module.exports = router;