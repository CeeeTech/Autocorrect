const express = require('express');
const cors = require('cors');

// Import database connection
const connectToDatabase = require('./config/db');

// Import default data creation files
const { initializeDefaultData } = require('./config/defaultData');

// Import routes
const routes = require('./routes/index');

// Import middlewares
// const authMiddleware = require('./middlewares/authMiddleware');
require('dotenv').config();

const passport = require('passport');
const session = require('express-session');

const port = process.env.PORT || 5000;

const app = express();

// Apply CORS middleware before defining any routes
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.COOKIE_KEY,
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

connectToDatabase();
initializeDefaultData();

app.get('/', (req, res) => {
    res.send('Welcome to the Corrector API');
});

// app.use('/api', authMiddleware, routes); // Apply authMiddleware to other routes under /api
app.use('/api', routes);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
