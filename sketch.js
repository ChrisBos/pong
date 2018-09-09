//Ball Physics
var ball = {
	x: 500,
	y: 500,
	speed: {
		x: -5,
		y: 5,
	},
};

//Player 1 Paddle
var pad1Score = 0;
var pad1Length = 100;
var pad1Pos = 400;
var pad1 = function() {
	rect(10, pad1Pos, 20, pad1Length);
}

//Player 2 Paddle
var pad2Score = 0;
var pad2Length = 100;
var pad2Pos = 400;
var pad2 = function() {
	rect(windowWidth - 30, pad2Pos, 20, pad2Length);
}

//Ball 1
var ball1 = function() {
	ellipse(ball.x, ball.y, 20, 20);
}

//-------------------//
//  Start Game Loop  //
//-------------------//


function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {

background(0);
pad1();
pad2();
ball1();

//Player Move

if (keyIsDown(87)) {
	pad1Pos -= 10;
	print("p5 keyCode: " + keyCode);
}

if (keyIsDown(83)) {
	pad1Pos += 10;
	print("p5 keyCode: " + keyCode);
}

if (keyIsDown(UP_ARROW)) {
	pad2Pos -= 10;
	print("p5 keyCode: " + keyCode);
}

if (keyIsDown(DOWN_ARROW)) {
	pad2Pos += 10;
	print("p5 keyCode: " + keyCode);
}


//Scoreboard
var score = function() {
	fill(255);
	textSize(20);
	textAlign(CENTER);
	text("SCORE", width / 2, 30, 50);

	textAlign(LEFT);
	text(pad1Score, (width / 2) - 100, 30, 50);

	textAlign(RIGHT);
	text(pad2Score, (width / 2) + 100, 30, 50);
}

score();

//Player 1 contact
if(ball.y > pad1Pos && ball.y < pad1Pos + pad1Length && ball.x < 40 ) {
	print("Hit Paddle 1");
	ball.speed.x *= -1;
	
}

//Player 1 contact edge
if((ball.y == pad1Pos && ball.x < 30) || (ball.y == pad1Pos + pad1Length && ball.x < 30) ) {
	print("Hit Paddle 1 edge")
	ball.speed.y *= -1;
}

//Player 2 contact
if(ball.y > pad2Pos - 20 && ball.y < pad2Pos + 20 + pad2Length && ball.x > width - 40 ) {
	print("Hit Paddle 2");
	ball.speed.x *= -1;
}

//Player 2 contact edge
if((ball.y == pad2Pos && ball.x > width - 30 ) || (ball.y == pad2Pos + pad1Length && ball.x > width - 30 ) ) {
	print("Hit Paddle 2 edge")
	ball.speed.y *= -1;
}


//When ball touches the relevant edge of the screen add +1 to the opposite players score
if(ball.x > width) {
	print("Right")
	ball.speed.x = ball.speed.x * -1;
	pad1Score ++;
} else if(ball.x < 0) {
	print("Left")
	ball.speed.x = ball.speed.x * -1;
	pad2Score ++;
}

//make ball bounce off top and bottom edges of the window
if(ball.y > height || ball.y < 0) {
	print("Top and Bottom")
	ball.speed.y = ball.speed.y * -1;
}

//Ball direction math (this could really be better)
ball.x = ball.x + ball.speed.x;
ball.y = ball.y + ball.speed.y;

//print(ball.speed.x, ball.speed.y);
//print(ball.x, ball.x);
}
