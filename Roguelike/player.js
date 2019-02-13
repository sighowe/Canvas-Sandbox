window.displayBoxIndex = -1;

$(document).keydown(function(e) {
  switch (e.which) {
    case 37:
      Navigate(-10);
      break;
    case 35:
      Navigate(-9);
      break;
    case 33:
      Navigate(9);
      break;

    case 38:
      Navigate(-1);
      break;

    case 39:
      Navigate(10);
      break;

    case 40:
      Navigate(1);
      break;
    case 36:
      Navigate(-11);
    break;
    case 34:
      Navigate(11);
    break;

    default:
      return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
});
var Navigate = function(a) {
    Player = parseInt(Player)
    if ((Player + a !== 00) && (Player + a !== 01) && (Player + a !== 02) && (Player + a !== 03) && (Player + a !== 04) && (Player + a !== 05) && (Player + a !== 06) && (Player + a !== 07) && (Player + a !== 08) && (Player + a !== 80) && (Player + a !== 81) && (Player + a !== 82) && (Player + a !== 83) && (Player + a !== 84) && (Player + a !== 85) && (Player + a !== 86) && (Player + a !== 87) && (Player + a !== 88) && (Player + a !== 10) && (Player + a !== 20) && (Player + a !== 30) && (Player + a !== 40) && (Player + a !== 50) && (Player + a !== 60) && (Player + a !== 70) && (Player + a !== 80) && (Player + a !== 88) && (Player + a !== 78) && (Player + a !== 68) && (Player + a !== 58) && (Player + a !== 48) && (Player + a !== 38) && (Player + a !== 28) && (Player + a !== 18) && (Player + a !== 08)) {
      if (mainArr[((Player + a).toString().substring(0, 1)) - 1][((Player + a).toString().substring(1, 2)) - 1] == "white") {
        Player = Player + a
        if (Player < 10) {
          Player = '0' + Player.toString()
        }
      } else if (mainArr[((Player + a).toString().substring(0, 1)) - 1][((Player + a).toString().substring(1, 2)) - 1] == "enemy") {
        Player = Player + a
        if (Player < 10) {
          Player = '0' + Player.toString()
        }
        Enemies = Enemies - 1;


      }
      updatePlayer();
      EnemyTurn();
    }



}
