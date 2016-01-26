$(document).ready(function(){

var correctColor;
var playerWord;
var $playerOne=$("#pOneDisplayBox");
var $playerTwo=$("#pTwoDisplayBox");

function lightColorGenerator(x){
  var color=parseInt(Math.random()*x+1);
  if (color==1){
    correctColor="blue";
  }
};
lightColorGenerator(10);

function wordGenerator($player){
  var word = parseInt(Math.random()*5+1);
  if (word==1){
    playerWord ="Blue";
  } else if (word==2) {
    playerWord ="Red";
  } else if (word==3) {
    playerWord ="Green";
  } else if (word==4) {
    playerWord ="Orange";
  } else if (word==5) {
    playerWord ="Yellow";
  } else if (word==6) {
    playerWord ="Purple";
  }
  $player.text(playerWord).css({"font-size":"35px"});
};

wordGenerator($playerOne);
wordGenerator($playerTwo);

});