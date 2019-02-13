//Calculates number of neighbors
var check = function(x, y){
var fun = 0;
//Checks cell to the top-left
	if(x != 0 && y != 0){
if(arr[x-1][y-1]){
	fun ++;
}}
//Checks cell to the left
	if(x != 0){
if(arr[x-1][y]){
	fun ++;
}}
//Checks cell above
	if(y != 0){
if(arr[x][y-1]){
	fun ++;
}}
//Checks cell to the right
	if(x != (dim - 1)){
if(arr[x+1][y]){
	fun ++;
}}
//Checks cell below
	if(y != (dim - 1)){
if(arr[x][y+1]){
	fun ++;
}}
//Checks cell to bottom-right
	if(x != (dim-1) && y != (dim - 1)){
if(arr[x+1][y+1]){
	fun ++;
}}
//Checks cell to top-right
	if(x != (dim-1) && y != 0){
if(arr[x+1][y-1]){
	fun ++;
}}
//Checks cell to bottom-left
	if(x != 0 && y != (dim - 1)){
if(arr[x-1][y+1]){
	fun ++;
}}

//Returns number of neighbors
return(fun);
}
