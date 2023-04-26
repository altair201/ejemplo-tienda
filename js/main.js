
import { usuarios } from "./user.js";
console.log(usuarios)

const ojo=document.getElementById("eye");
const contrasena=document.getElementById("contrasena");
const login=document.getElementById("login")
const user=document.getElementById("user")

ojo.addEventListener("click", function(){
    if(contrasena.type=="password"){
        contrasena.type="text";
    }else{
        contrasena.type="password"
    }
})

login.addEventListener("click", (evento)=>{
    let existe=false
    evento.preventDefault()
    usuarios.forEach((item)=>{
        if(user.value==item.username){
            if(contrasena.value==item.pass){
                existe=true
            }
        }
    })
    if(existe==true){
       location.assign("./principal.html/principal.html")
    }else{
        document.querySelector(".error").style.visibility="visible"
        setTimeout(function (){
            document.querySelector(".error").style.visibility="hidden"
        },5000)
    }
})