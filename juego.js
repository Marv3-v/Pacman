function tecla() {

var tecla = document.getElementById("tecla");

tecla.addEventListener("keypress", function(evento){
  console.log(evento.keypress);
})
}


//
// var buffer, context, size;
//
// buffer = document.getElement('canvas').getcontext("2d");
// context = document.getElement('canvas').getcontext("2d");
//
// var map = [
//     *,*,*,*,*,*,*,*,*,*,*,*,*,
//     *,0,0,0,0,0,0,0,0,0,0,0,*,
//     *,*,*,0,*,*,*,*,*,*,*,*,*,
//     *     0                 *,
//     *     1                 *,
//     *     0                 *,
//     *     0                 *,
//     *     0                 *,
//     *,*,*,*,*,*,*,*,*,*,*,*,*];
//
//
// size = 32;
//
// buffer.canvas.width = 16 * size;
// buffer.canvas.height = 9 * size;
//
// function drawMap() {
//
//    for (var i = 0; i < map.length; i++) {
//     buffer.fillStyle = (map[i] == 1)?"#4397b4":"#9e9632";
//    }
// }
//
//  // * = pared
//  // 0 = fondo
//  // 1 = pacman
// //  2 = comida
