var Player = 0;
var Enemies = 0;
//Generates an array
var create = function(){
    var arr = [];
    for (var i=0;i<=7;i++) {
      var data = [];
        for (var j=0;j<=7;j++) {
           if(Math.round(Math.random()) == 1){
            data.push("white");
           }
           else{
            data.push("black");
           }
        }
      arr.push(data);
    }
    return arr;
};
//colors a box in white
//color a square in black
var drawColor = function(x, y, color){
  document.getElementById((x+1).toString()+(y+1).toString()).style.backgroundColor = color;
  if(color == 'pink'){
    Player = (y+1).toString()+(x+1).toString();
  }
};
//Draws the entire board
var draw = function(array){
    for (a = 0; a < 7; a ++ ) {
		for (b = 0; b < 7; b ++) {
		if(array[b][a] == "white"){
		  drawColor(a, b, 'white');
    }
    else if(array[b][a] == "player"){
      drawColor(a, b, 'pink');
    }
    else if(array[b][a] == 'enemy'){
      drawColor(a, b, "red");
    }
		else{
		  drawColor(a, b, "black");
	}}}
};
var startPlayer = function(){
  var i = (Math.floor(Math.random() * 7));
  var j = (Math.floor(Math.random() * 7));
  if(mainArr[i][j] == "white"){
    mainArr[i][j] = "player";
    x = false;
    return(true);
}}
var startEnemy = function(){
  var i = (Math.floor(Math.random() * 7));
  var j = (Math.floor(Math.random() * 7));
  if(mainArr[i][j] == "white"){
    mainArr[i][j] = "enemy";
    x = false;
    Enemies = Enemies + 1;
    return(true);
}}
var updatePlayer = function(){
  for (a = 0; a < 7; a ++ ) {
		for (b = 0; b < 7; b ++) {
		if(mainArr[b][a] == "player"){
		  mainArr[b][a] = 'white';
    }
	}}
  console.log(Player.toString().substring(1,2));
  mainArr[(Player.toString().substring(0,1)) - 1][(Player.toString().substring(1,2)) - 1] = "player";
  draw(mainArr);
  if(Enemies == 0){
    console.log("Player wins!");
  }
}
mainArr = create()
while(!startPlayer()){}
while(!startEnemy()){}
draw(mainArr);
