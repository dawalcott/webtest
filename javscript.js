var y = true;
function changePicture(){
    if(y) {
        document.getElementById("poo").setAttribute("src","babby_duck.jpg");
        y = false;
    }   else    {
        document.getElementById("poo").setAttribute("src","puffing.jpg");
        y = true;
        document.getElementById("poo").setAttribute("height","10%");
    }
}
function changetext(){

}
var c = true;
function myFunction() {
    if(c) {document.getElementById("demo").innerHTML = "Hello World"; c = false;}
    else {document.getElementById("demo").innerHTML = "told you so"; c = true;}
}
function redColor(){
document.getElementById("body").style.backgroundColor = "red";
}
function whiteColor() {
    document.getElementById("body").style.backgroundColor = "white";
}
function blueColor(){
document.getElementById("body").style.backgroundColor = "blue";
}

function greenColor(){
document.getElementById("body").style.backgroundColor = "green";
}
function nemo() {
    window.open("");
}