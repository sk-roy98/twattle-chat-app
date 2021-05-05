import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

//initialize firebase


firebase.initializeApp({
    apiKey: "AIzaSyDOaWmu0z1B2Ss3r9b0pdDETFOX1voyB4E",
    authDomain: "twattle-3fecb.firebaseapp.com",
    projectId: "twattle-3fecb",
    storageBucket: "twattle-3fecb.appspot.com",
    messagingSenderId: "501836649980",
    appId: "1:501836649980:web:a9e5f2c86a91085c038e79",
    measurementId: "G-JJLVKCHSVE"
});
// firebase.analytics();
const chatauth = firebase.auth();
const chatFirestore = firebase.firestore();
export {chatauth, chatFirestore}; 
export default firebase;


