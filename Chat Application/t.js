
// function myfun(){
//    var a= document.getElementById("user").value
//    var b= document.getElementById("pass").value
//    localStorage.setItem('userid',a);
//    localStorage.setItem('passid',b);
//    let userid= localStorage.getItem('userid');
//    let passid= localStorage.getItem('pass');
   
//    document.getElementById("text").innerHTML= userid;

// }


firebase.auth().onAuthStateChanged(function(user){
   if (user) {
     // User is signed in.
     var email=user.email;
     currentuser= user;
     
  console.log(currentuser.email+"has logged in");
  document.getElementById("now").style.display="none";
  document.getElementById("navbar").style.display="block";

document.getElementById("chat").style.display="flex";


   

   } else {
     // No user is signed in.
   //   alert("pls sign in to continue");
     document.getElementById("now").style.display="block";

   }
 });


function account(){
   document.getElementById("card").style.display="none";
   document.getElementById("account").style.display="block";
}

function fun(){
   var email = document.getElementById("email").value;
   var passsword =document.getElementById("pass").value;
   create(email ,passsword);
   console.log( email+""+passsword);

}
function create(email,password){

// creating a user
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   console.log(errorCode);
   console.log(errorMessage);
  
   // ...
 });
}
// current user sign in

var email = document.getElementById("mail").value;
function into(){
   var email = document.getElementById("mail").value;
   var passsword =document.getElementById("pwd").value;
   signin(email ,passsword);
   console.log( email+""+passsword);
}
// data submiting to firebase
function submit(){
   var a =document.getElementById("id").innerHTML;
   if(a==null){
      alert("pls save your user name in profile");
   }
   var database =firebase.database();
   var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;


 
  uid = user.uid; 
  console.log(uid);
var ref = database.ref(uid);
  var database =firebase.database();
   var ref= database.ref(uid);
   // ref.on("value");
   firebase.database().ref(uid).limitToLast(1).once('value')
   .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            console.log(childSnapshot.val());
            console.log(childSnapshot.val().text);
            var b =childSnapshot.val().text;
      //       var btn = document.createElement("h1");   // Create a <button> element
      //       btn.innerHTML = childSnapshot.val().text;                   // Insert text
      //  var b= document.getElementById("msg-field");
      //  b.appendChild(btn);             // Append <button> to <body>
            
      
      
       var text = document.getElementById("message").value;
       var user = firebase.auth().currentUser;
       var data={
           name :user.email,
           text:text,
           username:b
       }
       var database =firebase.database();
       var ref = database.ref("messages");
   
       ref.push(data);
   console.log("yes it is done");
   
        });
   });
// ref.on("child_added", function(snapshot, prevChildKey) {
//    var newPost = snapshot.val();
   
//   console.log("Author: " + newPost.text);
   
 

// });
// console.log(current);
   // var email = document.getElementById("email").value;


}
function user(){
   var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;


 
  uid = user.uid; 
   firebase.database().ref(uid).limitToLast(1).once('value')
   .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            console.log(childSnapshot.val());
            console.log(childSnapshot.val().text);
            var b =childSnapshot.val().text;
            document.getElementById("username").value=b;
            document.getElementById("id").innerHTML=b;
         });
      });
     
}

function nice(){
   var user = firebase.auth().currentUser;
   // var name = document.getElementById("user").value;
  
   var username= document.getElementById("username").value;
   var database =firebase.database();
   console.log(user.uid);
   var ref = database.ref(user.uid);
   var data={
      text:username
  }
   ref.push(data);
   
   
}
function gotData(data){
   console.log(data.val());
   var messages = data.val();
   var keys = Object.keys(messages);
   console.log(keys);
   for(var i=0;i <keys.length; i++){
    
   var k= keys[i];
      var name =messages[k].name;
      var text = messages[k].text;
 
     console.log(name,text);
   
}

}
function errData(){
   console.log("Error!");
}

function signin(email,password){
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   console.log(errorCode);
   alert(errorMessage);
   // ...
 });
}
// logout guy 
function logout(){
   firebase.auth().signOut();
   console.log("has logged out");
   // window.location.reload();
   document.getElementById("now").style.display="block";
   document.getElementById("navbar").style.display="none";

   document.getElementById("chat").style.display="none";
   document.getElementById("profile").style.display="none";
   

}

// data incoming
var database =firebase.database();
var ref = database.ref("messages");
ref.on("child_added", function(snapshot, prevChildKey) {
   var newPost = snapshot.val();
   console.log("Author: " + newPost.text);
   console.log("Title: " + newPost.username);
   // console.log("Title: " + newPost.uid);
   // console.log("Previous Post ID: " + prevChildKey);
  
   var div= document.getElementById("msg-field");
   var user= document.getElementById("username").value;
   var p =document.createElement("p");
  var q= document.querySelectorAll("p");
   var btn = document.createElement("p");
   btn.className="hello";
   p.className="bolo";
 
  
   var user = firebase.auth().currentUser;
   
   if(newPost.name== user.email){
    
      btn.innerHTML = newPost.text;       
      btn.style.float="right";
      p.innerHTML= newPost.username;
      // p.style.margin="0,0,0,110px";
   }
   else{
            btn.innerHTML = newPost.text;
            btn.style.backgroundColor="#f8e896";
            p.innerHTML= newPost.username;
            
            
         }
                               // Insert text
            // div.appendChild(span);
            div.appendChild(btn);  
            btn.appendChild(p);

          btn.style.clear="right";
              // Append <button> to <body>
            //   window.location.href="#"+c;
            var objDiv = document.getElementById("msg-field");
            objDiv.scrollTop = objDiv.scrollHeight;
  
 });

      
function image(){
   var database =firebase.database();
   var ref = database.ref("cute");
   ref.on("child_added", function(snapshot, prevChildKey) {
      var newPost = snapshot.val();
      var a = newPost.text ;
      var b= "heyyy";
   console.log("heyyy");
   var a=0;
   a++;
   if(a==1){
      var user = firebase.auth().currentUser;
      var a=1;
      var data={
         name :user.email,
         text :a
        
     }
      var database =firebase.database();
      var ref = database.ref("cute");
  
      ref.push(data);
 
   document.getElementById("myimg").src="images/1.png";
   }
   else{
      alert("img is not available");
   }
});
}
// function myFunction(){
//    document.getElementById("load").style.display="block";
// }
 
// window.onload,function myFunction(){
//    document.getElementById("loader").fadeOut="slow";
// }


  






