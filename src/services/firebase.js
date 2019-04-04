import Firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBdS8_Dq245HQUS2nrGdMpicvvRxU1PNhs",
  authDomain: "adoteumpet-e0d2c.firebaseapp.com",
  databaseURL: "https://adoteumpet-e0d2c.firebaseio.com",
  projectId: "adoteumpet-e0d2c",
  storageBucket: "adoteumpet-e0d2c.appspot.com",
  messagingSenderId: "879978996066"
};

firebase = Firebase.initializeApp(config);

export default firebase