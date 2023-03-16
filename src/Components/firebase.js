// import firebase from "firebase"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp ( {
    apiKey: "AIzaSyCygBrYKklnNzweQ4aHy0TQRqeSXUE0ZjU",
    authDomain: "clone-b8618.firebaseapp.com",
    projectId: "clone-b8618",
    storageBucket: "clone-b8618.appspot.com",
    messagingSenderId: "763280642840",
    appId: "1:763280642840:web:d6d16fcb36cd82d966c46d",
    measurementId: "G-7377KKBE80"
    // databaseURL: "https://clone-b8618.appspot.com"


});
// const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {auth};