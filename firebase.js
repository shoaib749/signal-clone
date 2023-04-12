
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAJ-TrNsUpAt63TYDeCvRTCyzqwL_uz3YM",
    authDomain: "signal-98661.firebaseapp.com",
    projectId: "signal-98661",
    storageBucket: "signal-98661.appspot.com",
    messagingSenderId: "664202538785",
    appId: "1:664202538785:web:3090796665296482839860"
};
let app;
if (firebase.app.length === 0) {
    app = firebase.initalizeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();

export { db, auth };
