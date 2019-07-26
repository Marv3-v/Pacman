'use strict'
 function arriba() {

if(mapa[scriptman.y -1][scriptman.x] !== 3) {
mapa[scriptman.y][scriptman.x] = 2;  //Agregar Fondo
scriptman.y = scriptman.y -1;        //Restar para que suba
mapa[scriptman.y][scriptman.x] = 1;  //Asignar posición a pacman
dibujar();
corriendo_up = setTimeout(function() {
    arriba();
 }, 100);

 if(mapa[scriptman.y -1][scriptman.x] === 0){
         puntaje = puntaje + 1;
         var p = document.createTextNode("Score: " + puntaje);
         var div = document.querySelector(".score");
         div.innerHTML = "";
         div.append(p);
 }
}
document.querySelector("#pacman1").classList.remove('pacman-iz');
document.querySelector("#pacman1").classList.remove('pacman-ab');
document.querySelector("#pacman1").classList.remove('pacman');
document.querySelector('#pacman1').classList.add('compo');
document.querySelector('#pacman1').classList.add('pacman-ar');

// if(event.keyCode  !== 37 /*izquierda */ || event.keyCode !== 40  /*abajo*/ || event.keyCode !== 39){   //Derecha

  // }
}



function abajo() {
  if(mapa[scriptman.y +1][scriptman.x] !== 3) {
  mapa[scriptman.y][scriptman.x] = 2;   //cambiar posicion de pacman por 2, que es fondo
  scriptman.y = scriptman.y +1;        //sumar un numero para que este en el otro array de abajo
  mapa[scriptman.y][scriptman.x] = 1;   //poner a pacman
  dibujar();
  corriendo_down = setTimeout(function() {
      abajo();
   }, 100);

   if(mapa[scriptman.y +1][scriptman.x] === 0){
           puntaje = puntaje + 1;
           var p = document.createTextNode("Score: " + puntaje);
           var div = document.querySelector(".score");
           div.innerHTML = "";
           div.append(p);
   }
}
  document.querySelector("#pacman1").classList.remove('pacman-iz');
  document.querySelector("#pacman1").classList.remove('pacman-ar');
  document.querySelector("#pacman1").classList.remove('pacman');
  document.querySelector('#pacman1').classList.add('pacman-ab');
  // if(event.keyCode  !== 37 /*izquierda */ || event.keyCode !== 38  /*arriba*/ || event.keyCode !== 39){   //Derecha

    // }
}


function derecha(){
  if(mapa[scriptman.y][scriptman.x +1] !== 3) {
  mapa[scriptman.y][scriptman.x] = 2;   //cambiar posicion de pacman por 2, que es fondo
  scriptman.x = scriptman.x +1;        //sumar un numero para que este a la derecha
  mapa[scriptman.y][scriptman.x] = 1;   //poner a pacman
  dibujar();
  corriendo_right = setTimeout(function() {
      derecha();
   }, 100);

   // Condicion para puntuación Derecha
   if(mapa[scriptman.y][scriptman.x +1] === 0){
           puntaje = puntaje + 1;
           var p = document.createTextNode("Score: " + puntaje);
           var div = document.querySelector(".score");
           div.innerHTML = "";
           div.append(p);
   }
}
    document.querySelector("#pacman1").classList.remove('pacman-iz');
    document.querySelector("#pacman1").classList.remove('pacman-ar');
    document.querySelector("#pacman1").classList.remove('pacman-ab');
    document.querySelector('#pacman1').classList.add('pacman');

    // if(event.keyCode  !== 37 /*izquierda */ || event.keyCode !== 38  /*arriba*/ || event.keyCode !== 40){   //abajo

      // }
}



function izquierda(){
  if(mapa[scriptman.y][scriptman.x -1] !== 3) {

  mapa[scriptman.y][scriptman.x] = 2;   //cambiar posicion de pacman por 2, que es fondo
  scriptman.x = scriptman.x -1;        //restar un numero para que este a la izquierda
  mapa[scriptman.y][scriptman.x] = 1;   //poner a pacman

  dibujar();


  corriendo_left = setTimeout(function() {
      izquierda();
   }, 100);



    document.querySelector("#pacman1").classList.remove('pacman');
    document.querySelector("#pacman1").classList.remove('pacman-ar');
    document.querySelector("#pacman1").classList.remove('pacman-ab');
    document.querySelector('#pacman1').classList.add('compo');
    document.querySelector('#pacman1').classList.add('pacman-iz');

    if(mapa[scriptman.y][scriptman.x -1] === 0){
            puntaje = puntaje + 1;
            var p = document.createTextNode("Score: " + puntaje);
            var div = document.querySelector(".score");
            div.innerHTML = "";
            div.append(p);
    }
 }

}

var elementos = document.getElementById('mundo').getElementsByClassName("compo");


var puntaje = 0;
var corriendo_left;   //Funcion izquierda corriendo
var corriendo_right;
var corriendo_up;
var corriendo_down;


document.onkeydown = function(e) {
    // console.log(e.keyCode);
    if(e.keyCode  === 38){
       // if(cambio == true) {
        corriendo_left = clearTimeout(corriendo_left);
        corriendo_right = clearTimeout(corriendo_right);
        corriendo_down = clearTimeout(corriendo_down);
        arriba();
       //    cambio = false;
       // } else if (cambio == false) {
       //   up();
       //   cambio = true;
       // }

   }else if (e.keyCode === 40 ) {
       corriendo_left = clearTimeout(corriendo_left);
       corriendo_up = clearTimeout(corriendo_up);
       corriendo_right = clearTimeout(corriendo_right);
        abajo();

   } else if (e.keyCode === 39) {
       corriendo_left = clearTimeout(corriendo_left);
       corriendo_up = clearTimeout(corriendo_up);
       corriendo_down = clearTimeout(corriendo_down);
        derecha();

    } else if (e.keyCode === 37) {
      corriendo_right = clearTimeout(corriendo_right);
      corriendo_up = clearTimeout(corriendo_up);
      corriendo_down = clearTimeout(corriendo_down);
        izquierda();
    } else if (e.keyCode === 32) {       //Si presiona barra espaciadora, que se detenga
      corriendo_left = clearTimeout(corriendo_left);
      corriendo_right = clearTimeout(corriendo_right);
      corriendo_up = clearTimeout(corriendo_up);
      corriendo_down = clearTimeout(corriendo_down);
    }
}

//1 = pacman
//0 = comida
//3 = pared
//2 = fondo



 var mapa = [
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,0,3],
    [3,3,3,3,3,3,0,0,0,0,2,2,2,2,2,2,2,2,0,3],
    [3,2,2,2,2,0,0,0,0,2,2,2,2,3,2,2,2,2,0,3],
    [3,3,3,3,0,0,0,0,1,3,3,3,3,3,3,3,3,3,3,3],
    [3,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,0,2,0,3],
    [3,2,2,3,3,3,3,2,2,2,0,3,2,2,2,3,2,2,0,3],
    [3,2,2,2,0,2,2,2,2,2,2,2,2,0,2,2,2,2,0,3],
    [3,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0,3],
    [3,2,2,2,2,2,0,3,2,2,2,2,2,2,2,2,2,2,0,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]

 ];

// var mapa = [
//  [3,3,3,3,3,3,3,3,3,3,3]
//];



var scriptman = {
  x: 8,
  y: 5
};


function dibujar() {
  document.querySelector(".mundo").innerHTML = "";

  for (var i = 0; i < mapa.length; i=i + 1) {
            // console.log(mapa[i]);
            for (var x = 0; x < mapa[i].length; x= x+1) {
              // console.log(mapa[i][x]);
                if(mapa[i][x] === 3) {
                  document.querySelector(".mundo").innerHTML += "<div class='pared'></div>";



                } else if (mapa[i][x] === 0) {

                  document.querySelector(".mundo").innerHTML += "<div class='comida'></div>";
                  console.log("si existen" +"  "+ mapa[i][x]);

                  var platillo = {
                    x: mapa[i][x],
                    y: mapa[i]
                  };
                  // console.log("platillo");
                  // console.log(platillo);
                  if(mapa[platillo.x][platillo.y] === 1) {
                           alert("funciona");
                  }

                } else if (mapa[i][x] === 2){
                  document.querySelector(".mundo").innerHTML += "<div class='fondo'></div>";
                } else if (mapa[i][x] === 1){
                  document.querySelector(".mundo").innerHTML += "<div class='pacman' id='pacman1'></div>";

                } else if (mapa[i][x] !== 0) {
                  console.log("sii")
                   alert("ganaste");
                }

            }

  }

}

  window.onload = function () {
    var cargando = document.querySelector(".cargador");
    cargando.style.visibility = "hidden";
    cargando.style.opacity = "0";
  }


dibujar();
