const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://viswajeetmishra261:YVbM5u0M4p6SUsjX@cluster0.ww1zdfm.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
