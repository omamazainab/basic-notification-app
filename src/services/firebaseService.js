
import firebase from 'firebase';

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
  const messaging =firebase.messaging();

export function initNotification(){
    Notification.requestPermission().then((permission)=>{
        console.log(permission);
        if(permission === 'granted'){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}