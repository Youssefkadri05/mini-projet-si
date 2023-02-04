
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

// regler la ballon 
function Ball(x,y){
	this.x = x;
	this.y = y;
	this.yVel = 0;
	this.decel = 0.1;
	this.xVel = 0;
	this.size = 5;
}

function deplaceBall(){
	if(ballon.yVel !== 0){
		if(ballon.yVel > 0){
			ballon.yVel -= ballon.decel;
			if(ballon.yVel < 0) ballon.yVel = 0;
		} else {
			ballon.yVel += ballon.decel;
			if(ballon.yVel > 0) ballon.yVel = 0;
		}
	}
	if(ballon.xVel !== 0){
		if(ballon.xVel > 0){
			ballon.xVel -= ballon.decel;
			if(ballon.xVel < 0) ballon.xVel = 0;
		} else {
			ballon.xVel += ballon.decel;
			if(ballon.xVel > 0) ballon.xVel = 0;
		}
	}
	
	ballon.x += ballon.xVel;
	ballon.y += ballon.yVel;
}

function verifierBornesBall(){
  //but pour ronaldo
	if(ballon.x + ballon.size > canvas.width){
		if(ballon.y > 150 && ballon.y < 350){
			ronaldo.score++;
			refresh();
     modal.style.display = "block";
    
      span.onclick = function() {
  		modal.style.display = "none";
}
			return;
		} 
		ballon.x = canvas.width - ballon.size;
		ballon.xVel *= -1.5;
	}
	  //but pour messi
	if(ballon.x - ballon.size < 0){
		if(ballon.y > 150 && ballon.y < 350){
			messi.score++;
			refresh();
			  modal2.style.display= "block";
			  span2.onclick= function() {
			  modal2.style.display = "none";
			}
    
			return;
		}
		ballon.x = 0 + ballon.size;
		ballon.xVel *= -1.5;
	}

	if(ballon.y - ballon.size < 0){
		ballon.y = 0 + ballon.size;
		ballon.yVel *= -1.5;
	}
	if(ballon.y + ballon.size > canvas.height){
		ballon.y = canvas.height - ballon.size;
		ballon.yVel *= -1.5;
	}
}


document.onkeyup = function(e){
	if(e.keyCode === 90){
		Boutton_Z = false;
	}
	if(e.keyCode === 81){
		Boutton_Q = false;
	}
	if(e.keyCode === 68){
		Boutton_D = false;
	}
	if(e.keyCode === 83){
		Boutton_S = false;
	}
	if(e.keyCode === 38){
		ButtonHaut = false;
	}
	if(e.keyCode === 37){
		ButtonGauche = false;
	}
	if(e.keyCode === 40){
		ButtonBas = false;
	}
	if(e.keyCode === 39){
		ButtonDroit = false;
	}
	if(e.keyCode === 27){
		quitte = false;
	}

}


document.onkeydown = function(e){
	if(e.keyCode === 90){
    //z
		Boutton_Z = true;
	}
	if(e.keyCode === 81){
    //bouton q
		Boutton_Q = true;
	}
	if(e.keyCode === 68){
		Boutton_D = true;
	}
	if(e.keyCode === 83){
		Boutton_S = true;
	}
	if(e.keyCode === 38){
		ButtonHaut = true;
	}
	if(e.keyCode === 37){
		ButtonGauche = true;
	}
	if(e.keyCode === 40){
		ButtonBas = true;
	}
	if(e.keyCode === 39){
		ButtonDroit = true;
	}
	if(e.keyCode === 27){
		quitte = true;

	}
}

function verfierClavierKeyCode(){
	if(Boutton_Z){
		if(ronaldo.yVel > -ronaldo.maxSpeed){
			ronaldo.yVel -= ronaldo.accel;	
		} else {
			ronaldo.yVel = -ronaldo.maxSpeed;
		}
	} else {
		if(ronaldo.yVel < 0){
			ronaldo.yVel += ronaldo.decel;
			if(ronaldo.yVel > 0) ronaldo.yVel = 0;	
		}
	}
	if(Boutton_S){
		if(ronaldo.yVel < ronaldo.maxSpeed){
			ronaldo.yVel += ronaldo.accel;	
		} else {
			ronaldo.yVel = ronaldo.maxSpeed;
		}
	} else {
		if(ronaldo.yVel > 0){
			ronaldo.yVel -= ronaldo.decel;
			if(ronaldo.yVel < 0) ronaldo.yVel = 0;
		}
	}
	if(Boutton_Q){
		if(ronaldo.xVel > -ronaldo.maxSpeed){
			ronaldo.xVel -= ronaldo.accel;	
		} else {
			ronaldo.xVel = -ronaldo.maxSpeed;
		}
	} else {
		if(ronaldo.xVel < 0){
			ronaldo.xVel += ronaldo.decel;
			if(ronaldo.xVel > 0) ronaldo.xVel = 0;	
		}
	}
	if(Boutton_D){
		if(ronaldo.xVel < ronaldo.maxSpeed){
			ronaldo.xVel += ronaldo.accel;	
		} else {
			ronaldo.xVel = ronaldo.maxSpeed;
		}
	} else {
		if(ronaldo.xVel > 0){
			ronaldo.xVel -= ronaldo.decel;
			if(ronaldo.xVel < 0) ronaldo.xVel = 0;
		}
	}if(quitte){
		span2.onclick= function() {
		  modal2.style.display = "none";
		}
	}

	//Joueur2

	if(ButtonHaut){
		if(messi.yVel > -messi.maxSpeed){
			messi.yVel -= messi.accel;	
		} else {
			messi.yVel = -messi.maxSpeed;
		}
	} else {
		if(messi.yVel < 0){
			messi.yVel += messi.decel;
			if(messi.yVel > 0) messi.yVel = 0;	
		}
	}
	if(ButtonBas){
		if(messi.yVel < messi.maxSpeed){
			messi.yVel += messi.accel;	
		} else {
			messi.yVel = messi.maxSpeed;
		}
	} else {
		if(messi.yVel > 0){
			messi.yVel -= messi.decel;
			if(messi.yVel < 0) messi.yVel = 0;
		}
	}
	if(ButtonGauche){
		if(messi.xVel > -messi.maxSpeed){
			messi.xVel -= messi.accel;	
		} else {
			messi.xVel = -messi.maxSpeed;
		}
	} else {
		if(messi.xVel < 0){
			messi.xVel += messi.decel;
			if(messi.xVel > 0) messi.xVel = 0;	
		}
	}
	if(ButtonDroit){
		if(messi.xVel < messi.maxSpeed){
			messi.xVel += messi.accel;	
		} else {
			messi.xVel = messi.maxSpeed;
		}
	} else {
		if(messi.xVel > 0){
			messi.xVel -= messi.decel;
			if(messi.xVel < 0) messi.xVel = 0;
		}
	}
}

function gereeBall(){
	c.save();
	c.beginPath();
	c.fillStyle = "black";
	c.arc(ballon.x,ballon.y,ballon.size,0,Math.PI*2);
	c.fill();
	c.closePath();
	c.restore();

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

function verfierCBornesJoueurs(){
	if(ronaldo.y - ronaldo.size < 0){
		ronaldo.y = 0 + ronaldo.size;
		ronaldo.yVel *= -0.5;
	}
	if(ronaldo.x + ronaldo.size > canvas.width){
		ronaldo.x = canvas.width - ronaldo.size;
		ronaldo.xVel *= -0.5;
	}
	if(ronaldo.y + ronaldo.size > canvas.height){
		ronaldo.y = canvas.height - ronaldo.size;
		ronaldo.yVel *= -0.5;
	}
	if(ronaldo.x - ronaldo.size < 0){
		ronaldo.x = 0 + ronaldo.size;
		ronaldo.xVel *= -0.5;
	}
	//-----------------------------------
	if(messi.y + messi.size > canvas.height){
		messi.y = canvas.height - messi.size;
		messi.yVel *= -0.5;
	}
	if(messi.x + messi.size > canvas.width){
		messi.x = canvas.width - messi.size;
		messi.xVel *= -0.5;
	}
	if(messi.x - messi.size < 0){
		messi.x = 0 + messi.size;
		messi.xVel *= -0.5;
	}
	
	if(messi.y - messi.size < 0){
		messi.y = 0 + messi.size;
		messi.yVel *= -0.5;
	}
}
function gereeJoueur(){
	c.save();
	c.fillStyle = "yellow";
	c.beginPath();
	c.arc(ronaldo.x,ronaldo.y,ronaldo.size,0,Math.PI*2);
	c.fill();
	c.closePath();
	c.beginPath();
	c.fillStyle = "white";
	c.arc(messi.x,messi.y,messi.size,0,Math.PI*2);
	c.fill();
	c.closePath();
	c.restore();
}

function gererGardien(){
	c.save();
	c.beginPath();
  c.fillStyle = "#0f9e0f";
  	c.lineWidth =3;
    c.fillRect(0,80,100,350);
  c.strokeStyle  = "rgba(255,255,255,0.6)";
  c.strokeRect(0,80,100,350);
	  c.stroke();
  	c.closePath();
//-----------------
  c.beginPath();
  c.fillStyle = "#0f9e0f";
  	c.lineWidth =3;
    c.fillRect(800,80,100,350);
  c.strokeStyle  = "rgba(255,255,255,0.6)";
c.strokeRect(800,80,100,350);
	c.stroke();
  	c.closePath();
//-----------------
	c.beginPath();
	c.moveTo(0,150);
	c.lineTo(0,350);
	c.strokeStyle = "yellow";
	c.lineWidth = 20;
	c.stroke();
	c.closePath();
	c.beginPath();
	c.moveTo(canvas.width,150);
	c.lineTo(canvas.width,350);
	c.strokeStyle = "white";
	c.lineWidth = 20;
	c.stroke();
	c.closePath();
	c.restore();
>>>>>>> feature/gestion_de_joueurs
}