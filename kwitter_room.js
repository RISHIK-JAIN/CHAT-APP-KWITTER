
var firebaseConfig = {
      apiKey: "AIzaSyDen2o57uOA99tQKSAU9q9n3Mbg0kX-WnA",
      authDomain: "kwitter-2fff8.firebaseapp.com",
      databaseURL: "https://kwitter-2fff8-default-rtdb.firebaseio.com",
      projectId: "kwitter-2fff8",
      storageBucket: "kwitter-2fff8.appspot.com",
      messagingSenderId: "780714120313",
      appId: "1:780714120313:web:795d9239c2b3026f8c70a8",
      measurementId: "G-N8NWTGD9ZP"
    };
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="WELCOME  "+user_name;
  
  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
  purpose : "adding user"
   });  
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name'id="+Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+ Room_names +"</div>-<hr>";
       document.getElementById("output").innerHTML += row;
      
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("romm_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "Kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "Kwitter.html";
}