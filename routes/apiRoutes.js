const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {
	console.log('Got this far.');
	res.send('Got this far.');
});

router.post('/create', (req, res) => {
	console.log('Got this far.');

	db.Recipe.create({
		name: 'Test'
	}).then((data) => {
		console.log(data);
		res.send('Data added.');
	}).catch((err) => {
		console.log(err);
		res.status(500).send(err)
	});
})

module.exports = router;