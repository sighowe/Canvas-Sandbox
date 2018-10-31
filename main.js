function reset(){
	inc = (300 / document.getElementById("size").value);
	border = 300;
	Xval = 0;
	Yval = 0;
	Draw();
}
//set up variables
var colour = 'black';
var Xval = 0;
var Yval = 0;
var cont = true;
var num = 1;
var inc = 200;


//set up canvas
var c=document.getElementById("main");
var ctx=c.getContext("2d");
//randomly generate a colour
function getRandomColour() {
  var letters = '0123456789ABCDEF';
  var colour = '#';
  for (var i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
  }
  return colour;
}
//Randomly generate colour
var Dpixel = function(colour){

	ctx.fillStyle=colour;
	ctx.fillRect(Xval,Yval,inc,inc);
	ctx.stroke();
	Xval += inc;

if(Xval == border){
	Xval = 0;
	Yval += inc;
}
};
function Draw(){
while(Yval != border + inc){
Dpixel(getRandomColour());
}
}