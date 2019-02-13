//size of canvas and number of sqares are set here, to be changed later
size = 800;
dim = 250;
//generates random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};



//creates a canvas
var c = document.getElementById("main");
var ctx = c.getContext("2d");
var dime = size / dim;
//draws grid patten
var drawgrid = function(){
	var a;
	//draw grid
	for (a = 1; a < dime; a ++ ) {
		for (b = 1; b < dime; b ++) {
		drawbox();
    undrawbox();
	}}
	draw();
};
//colors a box in white
var undrawbox = function(x, y){
	x = dime*x;
	y = dime*y;
	ctx.moveTo(x,y);

	ctx.beginPath();
	ctx.rect(x, y, dime, dime);
	ctx.fillStyle = "white";
	ctx.fill();
	ctx.stroke();
};
//color a square in black
var drawbox = function(x, y){
	x = dime*x;
	y = dime*y;
	ctx.moveTo(x,y);

	ctx.beginPath();
	ctx.rect(x, y, dime, dime);
	ctx.fillStyle = "black";
	ctx.fill();
	ctx.stroke();
};
//update board to current array
var draw = function(){
	for (a = 0; a < dim; a ++ ) {
		for (b = 0; b < dim; b ++) {
		if(arr[a][b]){
		  drawbox(a, b);
		}
		else{
		  undrawbox(a, b);
	}}}
};

var arr = [];
//create a blank array
var create = function(){
for (var i=0;i<=dim;i++) {
  var data = [];
	for (var j=0;j<=dim;j++) {
	   data.push(false);
    }

  arr.push(data);
}}
//runs at start, generating grid lines
create();
drawgrid();
