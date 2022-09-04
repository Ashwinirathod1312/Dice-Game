var randomVariable= Math.floor(Math.random() *6) + 1;
var randomImages= "images/dice" + randomVariable + ".png";

var dice1= document.querySelectorAll("img")[0].setAttribute("src",randomImages)

var randomVariable2= Math.floor(Math.random()*6) +1;
var randomImages2= "images/dice" + randomVariable2 + ".png";

var dice2= document.querySelectorAll("img")[1].setAttribute("src",randomImages2);

if(randomVariable>randomVariable2){
   document.querySelector("h1").innerHTML= "player1 is the winner"
}
else if(randomVariable2>randomVariable){
    document.querySelector("h1").innerHTML="player2 is the winner!"
}
else{
   document.querySelector("h1").innerHTML="Draw!"}