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


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data{'message'};
like = message_data['like'];
name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+ like +" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;


      } });  }); }
getData();


function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});