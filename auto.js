//function for automating update();
var auton = false;
var interval;
var auto = function(){
//If interval is already on, turn it off
if(auton){
interval = setInterval(update, 100);
auton = false
}
//If interval is off, turn it on
else{
clearInterval(interval);
auton = true;
}}

