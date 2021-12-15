import firebase from 'firebase/firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyD1gxbKg2bwRVCo_7Z-SLnmea8CGcoQCKk",
    authDomain: "wasla-map.firebaseapp.com",
    databaseURL: "https://wasla-map-default-rtdb.firebaseio.com",
    projectId: "wasla-map",
    storageBucket: "wasla-map.appspot.com",
    messagingSenderId: "898337883330",
    appId: "1:898337883330:web:10e8d410452da32831275b",
  };
    
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;