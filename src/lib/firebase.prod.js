import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed'

// we need a config here
const config = {
    apiKey: "AIzaSyBp06pzNANnaQs-nIll18mPfP4Irifyd6s",
    authDomain: "netflix-challenge-ad009.firebaseapp.com",
    databaseURL: "https://netflix-challenge-ad009.firebaseio.com",
    projectId: "netflix-challenge-ad009",
    storageBucket: "netflix-challenge-ad009.appspot.com",
    messagingSenderId: "933442915121",
    appId: "1:933442915121:web:41043ec65038c08af2fe10"
};

const firebase = Firebase.initializeApp(config);

// we need to somehow seed the database
//seedDatabase(firebase)

export { firebase }