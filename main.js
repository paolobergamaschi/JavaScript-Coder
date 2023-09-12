
function ingresoPalabra(){
let entradaUsuario= prompt("Ingrese una palabra.");
let numero = parseFloat(entradaUsuario);
if(numero >=0 || numero <=0){
    alert("Error. ingrese una palabra.");
}
return entradaUsuario
}
function repeticion(entradaUsuario){
let entradaUsuario2 = prompt("Ingrese la cantidad de veces que se repetira su palabra. (maximo 20).");
if(entradaUsuario2 >=20 || entradaUsuario2 <=0){
alert("Ingrese un numero valido entre 1 y 20.");    
}
else{
    let i=0;
    while(i<entradaUsuario2){
        console.log(entradaUsuario + " " + (i++ + 1));       
   }   
 }
}

function mayuscula(entradaUsuario){
let entradaUsuario3 = prompt("Ingrese el lugar de la letra donde se colocara la mayuscula.");
let entradaUsuario3Mayus = "";
let numero2= parseInt(entradaUsuario3);
if(numero2 > entradaUsuario.length || numero2 < 0){
    alert("Ingrese un numero valido, no puede exceder los caracteres de su palabra.")
}
else{
for(let i=0; i<entradaUsuario.length; i++){
   if(i===numero2 - 1){ 
   entradaUsuario3Mayus += entradaUsuario[i].toUpperCase();}
   else{
    entradaUsuario3Mayus += entradaUsuario[i];
   }
}
console.log(entradaUsuario3Mayus);
}    
}

let palabra = ingresoPalabra()
repeticion(palabra)
mayuscula(palabra)