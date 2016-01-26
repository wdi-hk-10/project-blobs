$(document).ready(function(){

var pOneCorrectColor;
var pTwoCorrectCOlor;
var playerWord;
var pOneChoice;
var pTwoChoice;
var $playerOne=$("#pOneDisplayBox");
var $playerTwo=$("#pTwoDisplayBox");
var playerOneKeys=["q","w","e","r"];
var playerTwoKeys=["u","i","o","p"];
var playerOneTime=500;
var playerTwoTime=500;

function lightColorGenerator(){
  var color=parseInt(Math.random()*3+1);
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
  } /*else if (color==5){
    pOneCorrectColor="yellow";
    $playerOne.css({"color":"yellow"});
  } else if (color==6){
    pOneCorrectColor="purple";
    $playerOne.css({"color":"purple"});
  }*/
};

function darkColorGenerator(){
  var color=parseInt(Math.random()*3+1);
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
  } /*else if (color==5){
    pTwoCorrectColor="yellow";
    $playerTwo.css({"color":"yellow"});
  } else if (color==6){
    pTwoCorrectColor="purple";
    $playerTwo.css({"color":"purple"});
  }*/
};

function wordGenerator($player){
  var word = parseInt(Math.random()*3+1);
  if (word==1){
    playerWord ="Blue";
  } else if (word==2) {
    playerWord ="Red";
  } else if (word==3) {
    playerWord ="Green";
  } else if (word==4) {
    playerWord ="Orange";
  } //else if (word==5) {
    //playerWord ="Yellow";
  //} else if (word==6) {
    //playerWord ="Purple";
  //}
  $player.text(playerWord).css({"font-size":"35px"});
};

function playerOneInput(){
  $("body").on("keypress", function charInput(e){
    pOneChoice = String.fromCharCode(e.which);
    if (playerOneKeys.indexOf(pOneChoice)>=0){
      playerOneGame();
    }
  });
};
function playerTwoInput(){
  $("body").on("keypress", function charInput(b){
    pTwoChoice = String.fromCharCode(b.which);
    if (playerTwoKeys.indexOf(pTwoChoice)>=0){
      playerTwoGame();
    };
  });
};
/*
function getInput(){
  $("body").on("keypress", function charInput(e){
    Choice = String.fromCharCode(e.which);
    playGame(Choice);
  });
};
function clickButton(clicked){
    if (clicked=="q") {$("#Q").click();}
    else if (clicked=="w") {$("#W").click();}
    else if (clicked=="e") {$("#E").click();}
    else if (clicked=="r") {$("#R").click();}
    else if (clicked=="u") {$("#U").click();}
    else if (clicked=="i") {$("#I").click();}
    else if (clicked=="o") {$("#O").click();}
    else if (clicked=="p") {$("#P").click();};
};
function playGame(){
    if (playerOneKeys.indexOf(playerselect)>=0){
      for (var x=0;x<playerOneKeys.length;x++){
        if (playerselect==playerOneKeys[x]){
          var $temp = $("#"+playerOneKeys[x].toUpperCase());
          $temp.click();
          pOneCheckInput($temp.val());
        }
      }
    }
}
}
*/
function playerOneGame(){
    for (var x=0;x<playerOneKeys.length;x++){
      if (pOneChoice==playerOneKeys[x]){
        var $temp = $("#"+playerOneKeys[x].toUpperCase());
        $temp.click();
        pOneCheckInput($temp.val());
      }
    }
}
function playerTwoGame(){
    for (var y=0;y<playerTwoKeys.length;y++){
      if (pTwoChoice==playerTwoKeys[y]){
        var $temp = $("#"+playerTwoKeys[y].toUpperCase());
        $temp.click();
        pTwoCheckInput($temp.val());
      }
    }
  }
/*
  if (pOneChoice=="q") {
    $("#Q").click();
    var temp=$("#Q").val();
    pOneCheckInput(temp);
  } else if (pOneChoice=="w") {
    $("#W").click();
    var temp=$("#W").val();
    pOneCheckInput(temp);
  } else if (pOneChoice=="e") {
    $("#E").click();
    var temp=$("#E").val();
    pOneCheckInput(temp);
  } else if (pOneChoice=="r") {
    $("#R").click();
    var temp=$("#R").val();
    pOneCheckInput(temp);
  };}*/

function pOneCheckInput(value){
  if (value==pOneCorrectColor){
    lightColorGenerator()
    wordGenerator($playerOne);
    pOneButtonGenerator();
    resetTime($("#pOneProgressBar"));
  } else {
    console.log("P1wrong");
  };
};

function pTwoCheckInput(value) {
  if (value==pTwoCorrectColor){
    darkColorGenerator()
    wordGenerator($playerTwo);
    pTwoButtonGenerator();
  } else {
    console.log("P2wrong");
  };
};


function pOneButtonGenerator(){
  var lightColors=["red", "blue", "green", "orange"];
  var randomColor=[];
  for (var x=0;x<4;x++){
    var randomizer = lightColors.splice((Math.floor(Math.random() * lightColors.length)),1);
    randomColor.push(randomizer);
  };
  $("#Q").css({"background":randomColor[0]}).val(randomColor[0]);
  $("#W").css({"background":randomColor[1]}).val(randomColor[1]);
  $("#E").css({"background":randomColor[2]}).val(randomColor[2]);
  $("#R").css({"background":randomColor[3]}).val(randomColor[3]);
};
function pTwoButtonGenerator(){
  var darkColors=["red", "blue", "green", "orange"];
  var randomColor=[];
  for (var x=0;x<4;x++){
    var randomizer = darkColors.splice((Math.floor(Math.random() * darkColors.length)),1);
    randomColor.push(randomizer);
  };
  $("#U").css({"background":randomColor[0]}).val(randomColor[0]);
  $("#I").css({"background":randomColor[1]}).val(randomColor[1]);
  $("#O").css({"background":randomColor[2]}).val(randomColor[2]);
  $("#P").css({"background":randomColor[3]}).val(randomColor[3]);
};

function playerProgress($element) {
    //var progressBarWidth = percent * $element.width() / 5;
    //var progressBarWidth = ($element.width() / 5).toString();
    $element.find('div').animate({ width: "0%" }, 5000);
}
function resetTime($section){
    $section.find("div").stop().css({ "width": "100%" });
    playerProgress($section);
}
/*
function reduceTime() {
    playerOneTime = playerOneTime -100;
    if (playerOneTime <=-1) {
      gameOver();
      clearInterval(startTimer);
    } else {
       playerOneProgress($("#pOneStrength"));
       //$("#pOneProgressBar").animate({ width: "70%" }, 5000);
    }
  }

function startClock() {
    startTimer = setInterval(reduceTime, 1000);
  };
*/
function gameOver(){
  console.log("The end");
}

function start(){
  //startClock();
  playerProgress($("#pOneProgressBar"));
  lightColorGenerator();
  darkColorGenerator();
  wordGenerator($playerOne);
  wordGenerator($playerTwo);
  pOneButtonGenerator();
  pTwoButtonGenerator();
  playerOneInput();
  playerTwoInput();
}

start();

});