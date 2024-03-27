const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://armnsrn1732000:Ak12345@cluster0.rfa8ypo.mongodb.net';
//mongodb://localhost:27017
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
		// Start your application or perform additional operations
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});
