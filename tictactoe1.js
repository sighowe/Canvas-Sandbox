var turn = 0;
    var win = false;
  	var curplayer = "X";
    var board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]
    var update = function() {
    	x = 0;
      y = 0;
      while (y != board.length) {
        while (x != board.length) {
          document.getElementById(x.toString() + y.toString()).innerHTML = board[x][y];
          x++
        }
        y++
        x = 0;
      }


    }
    var usable = [
    [true, true, true],
    [true, true, true],
    [true, true, true]
    ]
    var clicko = function(ID) {
      x = ID[0];
      y = ID[1];
      if(usable[x][y]){
      usable[x][y] = false;
      board[x][y] = curplayer;
      update();
      turn += 1;
      if(turn % 2 == 1){
      	curplayer = "Q";
      }
      else{
      	curplayer = "X"
      }
      checkwin("X");
      checkwin("Q");
      if(turn == 9){
      	alert("Tie!")
        reset();
      }
    }}
    var x = 0;
    var y = 0;
