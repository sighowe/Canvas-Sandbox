//gets the position for mouse position and returns X and Y values in a variable
function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: Math.floor((evt.clientX - rect.left)/dime),
          y: Math.floor((evt.clientY - rect.top)/dime)
        };
 }
 //Event performed on click
 c.addEventListener('click', function(evt) {
    //stores mouse position
    var tmp = getMousePos(c, evt)
    //Toggles selected cell value
    if(arr[tmp.x][tmp.y] == false){
    arr[tmp.x][tmp.y] = true;
    }
    else{
    arr[tmp.x][tmp.y] = false;
    }
    //Display changes
    draw();
    //Not really sure what
 });
