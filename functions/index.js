const functions = require('firebase-functions');
const express  = require('express');
const app = express();

const FBAuth = require('./util/fbAuth');

const { getAllScreams, postOneScream } = require('./handlers/screams');
const {signup, login} = require('./handlers/users');

// const firebase = require('firebase');
// firebase.initializeApp(config);

//=============================================Imports Ends Here===========================================================================

//Scream routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);

//Users Routes
app.post('/signup', signup);
app.post('/login', login);


exports.api = functions.region('asia-northeast1').https.onRequest(app);
