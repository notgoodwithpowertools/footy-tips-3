import firebase from 'firebase';

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
console.log("authDomain", process.env.REACT_APP_AUTH_DOMAIN);

var config = (process.env.NODE_ENV === 'development') ? {
  apiKey: 'AIzaSyAF5pJIIeGCnKGM2GZKDga2DuJg2aeEp-4',
  authDomain: 'footytips-dev.firebaseapp.com',
  databaseURL: 'https://footytips-dev.firebaseio.com',
  storageBucket: 'footytips-dev.appspot.com',
  messagingSenderId: '189591411481'
} : {
  apiKey: 'AIzaSyAF5pJIIeGCnKGM2GZKDga2DuJg2aeEp-4',
  authDomain: 'footytips-dev.firebaseapp.com',
  databaseURL: 'https://footytips-dev.firebaseio.com',
  storageBucket: 'footytips-dev.appspot.com',
  messagingSenderId: '189591411481'
}


try {

  console.log("Firebase config:", config);
  firebase.initializeApp(config);

} catch (e) {

}



export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export var firebaseStorageRef = firebase.storage().ref();
export default firebase;

/*
<script src="https://www.gstatic.com/firebasejs/3.5.2/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAh-YrgSMzMco2xB81nUar_TJwRKGGQB6c",
    authDomain: "aa-todo-app.firebaseapp.com",
    databaseURL: "https://aa-todo-app.firebaseio.com",
    storageBucket: "aa-todo-app.appspot.com",
    messagingSenderId: "677047813556"
  };
  firebase.initializeApp(config);
</script>
*/
