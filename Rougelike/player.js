window.displayBoxIndex = -1;

$(document).keydown(function(e) {
    switch(e.which) {
        case 37:
          console.log("Left keypress detected!");
          Navigate(1);

        break;

        case 38:
          console.log("Up keypress detected!");
          Navigate(10);
        break;

        case 39:
          console.log("Right keypress detected!");
          Navigate(-1);
        break;

        case 40:
          console.log("Down keypress detected!");
          Navigate(-10);
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
var Navigate = function(a) {
    Player = parseInt(Player)
    if((Player + a !== 00) && (Player + a !== 01) && (Player + a !== 02) && (Player + a !== 03) && (Player + a !== 04) && (Player + a !== 05) && (Player + a !== 06) && (Player + a !== 07) && (Player + a !== 08) && (Player + a !== 80) &&  (Player + a !== 81) && (Player + a !== 82) && (Player + a !== 83) && (Player + a !== 84) && (Player + a !== 85) && (Player + a !== 86) && (Player + a !== 87) && (Player + a !== 88) && (Player + a !== 10) && (Player + a !== 20) && (Player + a !== 30) && (Player + a !== 40) && (Player + a !== 50) && (Player + a !== 60) && (Player + a !== 70) && (Player + a !== 80) && (Player + a !== 88) && (Player + a !== 78) && (Player + a !== 68) && (Player + a !== 58) && (Player + a !== 48) && (Player + a !== 38) && (Player + a !== 28) && (Player + a !== 18) && (Player + a !== 08)){
        Player = Player + a
        if(Player < 10){
          Player = '0' + Player.toString()
        }
        updatePlayer();
    }



}
