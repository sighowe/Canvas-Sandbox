var win = 0;
var memory = 0
var EnemyTurn = function(){
    if(Enemies == 1){
        memory = (Math.floor(Math.random() * 7));
        console.log(((Player).toString().substring(0, 1)));
        console.log(((Enemy).toString().substring(0, 1)));
        if(Player-Enemy == 11){
            EnemyNavigate(11);
        }
        if(Player-Enemy == 9){
            EnemyNavigate(9);
        }
        if(Player-Enemy == -11){
            EnemyNavigate(-11);
        }
        if(Player-Enemy == -9){
            EnemyNavigate(-9);
        }
        if(Player-Enemy == -10){
            EnemyNavigate(-10);
        }
        if(Player-Enemy == 10){
            EnemyNavigate(10);
        }
        if(Player-Enemy == -1){
            EnemyNavigate(-1);
        }
        if(Player-Enemy == 1){
            EnemyNavigate(1);
        }
        
        

    }
    
    







}
var EnemyNavigate = function(a) {
    Enemy = parseInt(Enemy)
    if ((Enemy + a !== 00) && (Enemy + a !== 01) && (Enemy + a !== 02) && (Enemy + a !== 03) && (Enemy + a !== 04) && (Enemy + a !== 05) && (Enemy + a !== 06) && (Enemy + a !== 07) && (Enemy + a !== 08) && (Enemy + a !== 80) && (Enemy + a !== 81) && (Enemy + a !== 82) && (Enemy + a !== 83) && (Enemy + a !== 84) && (Enemy + a !== 85) && (Enemy + a !== 86) && (Enemy + a !== 87) && (Enemy + a !== 88) && (Enemy + a !== 10) && (Enemy + a !== 20) && (Enemy + a !== 30) && (Enemy + a !== 40) && (Enemy + a !== 50) && (Enemy + a !== 60) && (Enemy + a !== 70) && (Enemy + a !== 80) && (Enemy + a !== 88) && (Enemy + a !== 78) && (Enemy + a !== 68) && (Enemy + a !== 58) && (Enemy + a !== 48) && (Enemy + a !== 38) && (Enemy + a !== 28) && (Enemy + a !== 18) && (Enemy + a !== 08)) {
      if (mainArr[((Enemy + a).toString().substring(0, 1)) - 1][((Enemy + a).toString().substring(1, 2)) - 1] == "white") {
        Enemy = Enemy + a
        if (Enemy < 10) {
          Enemy = '0' + Enemy.toString()
        }
      } else if (mainArr[((Enemy + a).toString().substring(0, 1)) - 1][((Enemy + a).toString().substring(1, 2)) - 1] == "player") {
        Enemy = Enemy + a
        if (Enemy < 10) {
          Enemy = '0' + Enemy.toString()
        }
        win = 1;        
        setTimeout(function (){
  	alert("Player loses.");
	
}, 50)
        


      }
      updateEnemy();
    }



}