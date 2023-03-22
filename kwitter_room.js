// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("user_name").innerHTML = "welcome"+user_name+"!";

function addRoom()
{
    room_name= localStorage.getItem("room_name");
    localStorage.setItem("room_name");

    window.location("kwitter_room.html");
}

function getData()
{
   firebase.database().ref("/").on('value',
   function(snapshot){document.getElementById("output").innerHTML ="";
    snapshot.forEach(function(childSnapshot) {childKey = 
    childSnapshot.key;
          room_name = childKey;


          console.log(firebase_message_id);
          console.log(message_data);
          name = message_data['name'];
          message = message_data['message'];
          like = message_data['like'];
          name_with_tag = "<h4>" + name +"</h4>";
          message_with_tag = "<h4> class='message_h4'>" + message + "</h4>";
          like_button="<button class='btn btn-warning' id="+ firebase_message_id+"value=" +like+"onclick='updateLike(this.id)>Likes :" + like+"</button>";
          row = name_with_tag+message_with_tag+like_button;
          document.getElementById("output").innerHTML+= row;
        
        
});});}
 getData();

 function logout()
 {
    
 }
