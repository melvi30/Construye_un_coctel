"use strict"
//Cuando hago onDrop en .main_vaso entonces, el elemento .main_ingrediente se QUITA la clase "".ver" y 
//se AÑADE ".ver" al primer elemento de ".main_proceso" y luego se AÑADE ".ver" al 2do elemento de
// ".main_ingrediente"

let caja1 = document.getElementById("caja1")
const proc = document.querySelectorAll(".main_proceso")
const ing = document.querySelectorAll(".main_ingrediente")
const p1 = document.querySelectorAll(".main_p1")
var lima = document.getElementById("lima1")
var lima2 = document.getElementById("lima2") == lima

  /*  caja1.addEventListener(drop ; e) {
        if(lima2 == lima) {
           proc[1].classList.add("ver");  
        }
    }
})*/

ing.forEach((ingrediente , i ) =>{
    ing[i].classList.add("ver");
})


//drop and drag //
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
   
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
