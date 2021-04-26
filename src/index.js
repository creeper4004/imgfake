const express = require('express');

const config = require("./server/config");

//getting database
require('./database');

//start server
const app = config(express());

app.listen(app.get('port'), () => {
	console.log('Server runngin in port:', app.get('port'));
});
