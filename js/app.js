"use strict";
//Cuando hago onDrop en .main_vaso entonces, el elemento .main_ingrediente se QUITA la clase "".ver" y 
//se AÑADE ".ver" al primer elemento de ".main_proceso" y luego se AÑADE ".ver" al 2do elemento de
// ".main_ingrediente"
const caja1 = document.getElementById("caja1");
var proc = document.querySelectorAll(".main_proceso");
const ing = document.querySelectorAll(".main_ingrediente");
var p1 = document.querySelectorAll(".main_p1");
var lima1 = document.getElementById("lima1");
var lima2 = document.getElementById("lima2");
const text = document.querySelectorAll('header_text');


//drop and drag //
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
   // ev.dataTransfer.setData("text", ev.target.id);
    var id = ev.target.id;
    ev.dataTransfer.setData("itemid", id);
    var source = id ? document.getElementById(ev.target.id).parentNode.id : '';
    ev.dataTransfer.setData("source", source);
       
}
function drop(ev) {
    ev.preventDefault();
        
    if (ev.dataTransfer.getData("itemid") == 'lima1'){
         document.getElementById('lima2').classList.add('ver');
         document.getElementById('menta1').classList.add('ver');
         document.getElementById("lima1").classList.add('ocultar');
         document.getElementById("lima3").classList.remove("ver");
         document.getElementById("menta3").classList.add("ver");
    }

    if (ev.dataTransfer.getData("itemid") == 'menta1'){
        document.getElementById('menta2').classList.add('ver');
        document.getElementById('lima2').classList.remove('ver');
        document.getElementById('barcardi').classList.add('ver');
        document.getElementById('menta1').classList.add('ocultar');
        document.getElementById('menta3').classList.remove('ver');
        document.getElementById('bacardi3').classList.add('ver');
    }

   if (ev.dataTransfer.getData("itemid") == 'barcardi'){
        document.getElementById('bacardi2').classList.add('ver');
        document.getElementById('menta2').classList.remove('ver');
        document.getElementById('hielo1').classList.add('ver');
        document.getElementById('barcardi').classList.add('ocultar');
        document.getElementById('hielo3').classList.add('ver');
        document.getElementById('bacardi3').classList.remove('ver');
    }

    if (ev.dataTransfer.getData("itemid") == 'hielo1'){
        document.getElementById('hielo2').classList.add('ver');
        document.getElementById('bacardi2').classList.remove('ver');
        document.getElementById('soda1').classList.add('ver');
        document.getElementById('hielo1').classList.remove('ver');
        document.getElementById('soda3').classList.add('ver');
        document.getElementById('hielo3').classList.remove('ver');
    }
    if (ev.dataTransfer.getData("itemid") == 'soda1'){
        document.getElementById('soda2').classList.add('ver');
        document.getElementById('hielo2').classList.remove('ver');
        document.getElementById('soda1').classList.remove('ver');
        document.getElementById('soda3').classList.remove('ver'); 
        coctel();
    } 
    
}

function coctel(){
    document.getElementById('coctel1').classList.add('ver');
    document.getElementById('enhora').classList.add('ver');
    document.getElementById('soda2').classList.remove('ver');
    document.getElementById('vasov').classList.add('ocultar');
    document.getElementById('prima').classList.remove('ver');
    document.getElementById('arrastra').classList.add('ocultar');
    document.getElementById('enlace').classList.add('ver')
    setTimeout(() => {
        document.getElementById('fondo1').classList.add('ver');
    }, 400);
    setTimeout(() => {
        document.getElementById('destelloizq').classList.add('ver');
    }, 500);
    setTimeout(() => {
        document.getElementById('destelloder').classList.add('ver');
    }, 600);
    
    
}


