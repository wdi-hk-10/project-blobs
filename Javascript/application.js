$(document).ready(function(){

var pOneCorrectColor;
var pTwoCorrectCOlor;
var playerWord;
var $playerOne=$("#pOneDisplayBox");
var $playerTwo=$("#pTwoDisplayBox");

function lightColorGenerator(){
  var color=parseInt(Math.random()*5+1);
  if (color==1){
    pOneCorrectColor="blue";
    $playerOne.css({"color":"blue"});
  } else if (color==2){
    pOneCorrectColor="red";
    $playerOne.css({"color":"red"});
  } else if (color==3){
    pOneCorrectColor="green";
    $playerOne.css({"color":"green"});
  } else if (color==4){
    pOneCorrectColor="orange";
    $playerOne.css({"color":"orange"});
  } else if (color==5){
    pOneCorrectColor="yellow";
    $playerOne.css({"color":"yellow"});
  } else if (color==6){
    pOneCorrectColor="purple";
    $playerOne.css({"color":"purple"});
  }
};

function darkColorGenerator(){
  var color=parseInt(Math.random()*5+1);
  if (color==1){
    pTwoCorrectColor="blue";
    $playerTwo.css({"color":"blue"});
  } else if (color==2){
    pTwoCorrectColor="red";
    $playerTwo.css({"color":"red"});
  } else if (color==3){
    pTwoCorrectColor="green";
    $playerTwo.css({"color":"green"});
  } else if (color==4){
    pTwoCorrectColor="orange";
    $playerTwo.css({"color":"orange"});
  } else if (color==5){
    pTwoCorrectColor="yellow";
    $playerTwo.css({"color":"yellow"});
  } else if (color==6){
    pTwoCorrectColor="purple";
    $playerTwo.css({"color":"purple"});
  }
};

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
lightColorGenerator();
darkColorGenerator();
wordGenerator($playerOne);
wordGenerator($playerTwo);

});