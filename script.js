function showPage(id){

document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active")
})

document.getElementById(id).classList.add("active")

}



function register(){

let email=document.getElementById("email").value
let password=document.getElementById("password").value

auth.createUserWithEmailAndPassword(email,password)

}



function login(){

let email=document.getElementById("email").value
let password=document.getElementById("password").value

auth.signInWithEmailAndPassword(email,password)

}



function saveProfile(){

let user=auth.currentUser

db.collection("users").doc(user.uid).set({

name:document.getElementById("name").value,

age:document.getElementById("age").value,

gender:document.getElementById("gender").value

})

}



function sendMessage(){

let msg=document.getElementById("messageInput").value

db.collection("messages").add({

text:msg,

time:Date.now()

})

}



db.collection("messages").orderBy("time")

.onSnapshot(snapshot=>{

let box=document.getElementById("messages")

box.innerHTML=""

snapshot.forEach(doc=>{

let p=document.createElement("p")

p.innerText=doc.data().text

box.appendChild(p)

})

})



function playSong(){

let url=document.getElementById("songURL").value

document.getElementById("player").src=url

}
