import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDjY95UYAxLy3T8j9gNoNh6PJDFVkuQvBI",
    authDomain: "game-on-d7fa9.firebaseapp.com",
    projectId: "game-on-d7fa9",
    storageBucket: "game-on-d7fa9.appspot.com",
    messagingSenderId: "787002459954",
    appId: "1:787002459954:web:6e23c2a1fb5e226fdb392b"
  };

  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();