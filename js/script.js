
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