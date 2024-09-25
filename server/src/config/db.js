const mongoose = require('mongoose');

require('dotenv').config();


async function connectToDatabase() {
    try {
        const connectionString = process.env.DB_CONNECTION_STRING;
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the database');
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
};

module.exports = connectToDatabase;