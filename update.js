//Updates the board to next generation
var update = function(){
//Makes temparr to work with rather than editing arr
temparr = arr;
//loop for every cell
for (a = 0; a < dim; a ++) {
for (b = 0; b < dim; b ++) {
  //appplied rules on selected cell, then puts new outcome in array for next gen
  if(check(a, b) <= 1){
		temparr[a][b] = false;
	}
  if(check(a, b) >= 4){
		temparr[a][b] = false;
	}
  if(check(a, b) == 3){
		temparr[a][b] = true;
	}
}}
//sets main array to array just created, then displays it
arr = temparr;
draw();
}
