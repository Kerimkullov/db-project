 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBKU18ijzlE3HIeS_Ti14wRgbtwhSsj1GQ",
    authDomain: "db-project-e50b5.firebaseapp.com",
    databaseURL: "https://db-project-e50b5.firebaseio.com",
    projectId: "db-project-e50b5",
    storageBucket: "",
    messagingSenderId: "959125830622",
    appId: "1:959125830622:web:76e61b07b3841596"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()
//   firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;