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

function Player(x,y){
	this.x = x;
	this.y = y;
	this.yVel = 0;
	this.size = 20;
	this.accel = 0.55;
	this.xVel = 0;
	this.score = 0;
	this.decel = 0.55;
	this.maxSpeed = 5;
}

function refresh(){
	var but1 = ronaldo.score;
	var but2 = messi.score;
	ronaldo = new Player(100,250);
	ronaldo.score = but1;
	messi = new Player(800,250);
	messi.score = but2;
	ballon = new Ball(450,250);
	Boutton_Z = false;
	Boutton_S = false;
	Boutton_Q = false;
	Boutton_D = false;
	ButtonHaut = false;
	ButtonBas = false;
	ButtonGauche = false;
	ButtonDroit = false;
	quitte = false;
}

function deplaceJoueur(){
	ronaldo.x += ronaldo.xVel;
	ronaldo.y += ronaldo.yVel;
	messi.x += messi.xVel;
	messi.y += messi.yVel;
}

function verifierImpactEntreJoueur(){
	//savoir la distace entre la ballon et le joueur 
	var p1_ball_distance = distance(ronaldo.x,ronaldo.y,ballon.x,ballon.y) - ronaldo.size - ballon.size;
	// si <0 ctd le jouer toucher la ballon 
	if(p1_ball_distance < 0){
		collision(ballon,ronaldo);
	}
	var p2_ball_distance = distance(messi.x,messi.y,ballon.x,ballon.y) - messi.size - ballon.size;
	if(p2_ball_distance < 0){
		collision(ballon,messi);
	}
}

function collision(ob1,ob2){
	var dx = (ob1.x - ob2.x) / (ob1.size);
	var dy = (ob1.y - ob2.y) / (ob1.size);
	ob2.xVel = -dx;
	ob2.yVel = -dy;
	ob1.xVel = dx;
	ob1.yVel = dy;
}

function distance(x1,y1,x2,y2){
	return Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
}