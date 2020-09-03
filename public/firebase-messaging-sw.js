importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyA5AS4yhlkkwbqxfJ5vCL-wZkGgME5Hgso",
    authDomain: "bootcamp-43104.firebaseapp.com",
    databaseURL: "https://bootcamp-43104.firebaseio.com",
    projectId: "bootcamp-43104",
    storageBucket: "bootcamp-43104.appspot.com",
    messagingSenderId: "887883406732",
    appId: "1:887883406732:web:150ed2b5b14789b18d4aa9"
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();