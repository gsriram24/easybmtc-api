const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({
	path: './config.env'
});
const app = require('./index');
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false
	})
	.then((con) => {
		console.log('DB Connected');
	});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`App running on port ${port}...`);
});
