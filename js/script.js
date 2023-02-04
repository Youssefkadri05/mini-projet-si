var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var out = document.getElementById("out");
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
// modal pour afficher images 
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");
var modal2= document.getElementById("myModal2");
//  <span> element pour fermer modal
var span = document.getElementsByClassName("close")[0];

var span2 = document.getElementsByClassName("close")[1];

var init = requestAnimationFrame(start);
var ronaldo = new Player(10,250);
var messi = new Player(950,250);
var Boutton_Z = false;
var Boutton_S = false;
var Boutton_Q = false;
var Boutton_D = false;
var ButtonHaut = false;
var ButtonBas = false;
var ButtonGauche = false;
var ButtonDroit = false;
var quitte = false;
var ballon = new Ball(450,250);