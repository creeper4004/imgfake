const express = require('express');
const router = express.Router();

require('../controllers/home');


module.exports = app => {

	router.get('/', home.index);
	router.get('/images/:image_id', home.index);
	router.post('/post', home.index);
	router.get('/', home.index);

	app.use(router);

};
