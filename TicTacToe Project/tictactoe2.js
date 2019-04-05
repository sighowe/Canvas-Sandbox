var Dboard = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    var checkwin = function(n) {
      debugupdate(n);
      if (Dboard[0][0]) {
        if (Dboard[0][1]) {
          if (Dboard[0][2]) {
            win = true;
          }
        }
        if (Dboard[1][0]) {
          if (Dboard[2][0]) {
            win = true;
          }
        }
      }
      if (Dboard[1][1]) {
        if (Dboard[0][1]) {
          if (Dboard[2][1]) {
            win = true;
          }
        }
        if (Dboard[1][0]) {
          if (Dboard[1][2]) {
            win = true;
          }
        }}
        if (Dboard[2][2]) {
          if (Dboard[1][2]) {
            if (Dboard[0][2]) {
              win = true;
            }
          }
          if (Dboard[2][1]) {
            if (Dboard[2][0]) {
              win = true;
            }
          }
        }
      
      if (Dboard[0][0] && Dboard[1][1] && Dboard[2][2]) {
        win = true;
      }
      if (Dboard[0][2] && Dboard[1][1] && Dboard[2][0]) {
        win = true;
      }

      if (win) {
        document.getElementById(n+'win').innerHTML = parseInt(document.getElementById(n+'win').innerHTML) + 1;
        reset();
        win = false;
		  
      }}

    


    var debugupdate = function(n) {
      x = 0;
      y = 0;
      while (y != board.length) {
        while (x != board.length) {
          if (board[x][y] == n) {
            Dboard[x][y] = 1;
          } else {
            Dboard[x][y] = 0;
          }
          x++
        }
        y++
        x = 0;
      }
    }
		
    var reset = function() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]
  usable = [
  	[true, true, true],
    [true, true, true],
    [true, true, true],
  
  ]
  x = 0;
  y = 0;
  turn = 0;
  curplayer = "X";
  update();
	curplayer = "X";
}
reset();
update();
