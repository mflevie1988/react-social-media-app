const functions = require('firebase-functions');
const express  = require('express');
const app = express();

const FBAuth = require('./util/fbAuth');

const { getAllScreams, postOneScream } = require('./handlers/screams');
const {signup, login, uploadImage } = require('./handlers/users');

// const firebase = require('firebase');
// firebase.initializeApp(config);

//=============================================Imports Ends Here===========================================================================

//Scream routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);

//Users Routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);


exports.api = functions.region('asia-east2').https.onRequest(app);
