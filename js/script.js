
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
}