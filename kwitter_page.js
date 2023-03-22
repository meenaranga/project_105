const firebaseConfig = {
    apiKey: "AIzaSyBlnupslLcGijvT1Fb5xu-BStWLvRSe_Wk",
    authDomain: "class-101-6f557.firebaseapp.com",
    databaseURL: "https://class-101-6f557-default-rtdb.firebaseio.com",
    projectId: "class-101-6f557",
    storageBucket: "class-101-6f557.appspot.com",
    messagingSenderId: "322331760979",
    appId: "1:322331760979:web:b3c59fcb67a8816a6de9a6",
    measurementId: "G-DJL30VXFG8"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
 
 
function send()
{
    message = localStorage.getItem("msg");
 
    firebase.database().ref(room_name).rush({
        name:user_name,
        message:msg,
        like:0
    });
}