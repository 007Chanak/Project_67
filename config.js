import firebase from 'firebase';
var firebaseConfig = {
apiKey: "AIzaSyAbsvlSearfOptcVq-MFhregagRDAT0PWs",
  authDomain: "project-67-72556.firebaseapp.com",
  projectId: "project-67-72556",
  storageBucket: "project-67-72556.appspot.com",
  messagingSenderId: "282248498753",
  appId: "1:282248498753:web:42d08f60c36e0494ba00c0"
};
firebase.initializeApp(firebaseConfig);

export default firebase.database();