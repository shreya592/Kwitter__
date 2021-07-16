
//ADD YOUR FIREBASE LINKS HERE

 // Your web app's Firebase configuration
 const firebaseConfig = {
      apiKey: "AIzaSyA_TX2MbgOUXWAGBd_kMJ0iTx4KHErsjBw",
      authDomain: "kwitter-79d9e.firebaseapp.com",
      databaseURL: "https://kwitter-79d9e-default-rtdb.firebaseio.com",
      projectId: "kwitter-79d9e",
      storageBucket: "kwitter-79d9e.appspot.com",
      messagingSenderId: "187807351467",
      appId: "1:187807351467:web:879545d17fdd2614396dee"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
    user_name= localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome"+ user_name;


    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name "
          });
          localStorage.setItem("room_name", room_name);
          window.location= "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name- "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });
});
}
getData();

      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name",name);
            window.location="kwitter_page.html";
      }

      function logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="kwitter.html";
      }

     
