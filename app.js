// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
// Initial and Config Server.
const app = express();
const server = http.Server(app);


// Mongoose setup
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost/e34`);

const db = mongoose.connection;
db.on('error', function(err){
  console.error(err);
});
db.once('open', function callback () {
  console.info('Connected to the database');
});

//  START Agenda jobs
//require('./jobs/scheduler.agenda').schedule();

// Parsers for POST data
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'c0s33g0',
  store: new MongoStore({
    mongooseConnection: db,
    ttl: 3600 * 24 * 60, // 2 months
    touchAfter: 3600 * 24 * 2
  }),
  unset: 'destroy',
  cookie: { maxAge: (3600000 * 24 * 60) }, // 2 months
  resave: false,
  saveUninitialized: true
}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/doc', express.static(path.join(__dirname, 'doc')));


// Get our API routes
const routes = require('./api/v1/shared/routes')(express);

// Set our api routes
app.use('/api/v1', routes);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Test /ping
app.get('/ping', function(req, res){
  res.status(200).json({
    success: true
  });
});

/*** Get port from environment and store in Express.*/
const port = process.env.PORT || '5000';
app.set('port', port);

server.listen(port, function(){
  console.log(`E34 server is running on: ${port}`)
});
