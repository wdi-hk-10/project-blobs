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
var timeOverOne;
var timeOverTwo;
var checkWinOne=0;
var checkWinTwo=0;
var wrong = new buzz.sound("./Audio/error.mp3");
var correct = new buzz.sound("./Audio/correct.mp3");

//RANDOMLY ASSIGN ONE OF FOUR COLORS TO THE WORD ON DISPLAY
function lightColorGenerator(){
  var color=parseInt(Math.random()*3+1);
  if (color==1){
    pOneCorrectColor="#66c2ff";
    $playerOne.css({"color":"blue"});
  } else if (color==2){
    pOneCorrectColor="#ff3333";
    $playerOne.css({"color":"red"});
  } else if (color==3){
    pOneCorrectColor="#00cc00";
    $playerOne.css({"color":"green"});
  } else if (color==4){
    pOneCorrectColor="#ffa31a";
    $playerOne.css({"color":"orange"});
  }
}

function darkColorGenerator(){
  var color=parseInt(Math.random()*3+1);
  if (color==1){
    pTwoCorrectColor="#0059b3";
    $playerTwo.css({"color":"blue"});
  } else if (color==2){
    pTwoCorrectColor="#990000";
    $playerTwo.css({"color":"red"});
  } else if (color==3){
    pTwoCorrectColor="#008000";
    $playerTwo.css({"color":"green"});
  } else if (color==4){
    pTwoCorrectColor="#cc5100";
    $playerTwo.css({"color":"orange"});
  }
}

//DISPLAY ONE OF FOUR RANDOM WORDS
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
  }
  $player.text(playerWord).css({"font-size":"35px"});
}

//RANDOMLY ASSIGN UNIQUE COLORS TO THE INPUT BUTTONS
function pOneButtonGenerator(){
  var lightColors=["#ff3333", "#66c2ff", "#00cc00", "#ffa31a"];
  var randomColor=[];
  for (var x=0;x<4;x++){
    var randomizer = lightColors.splice((Math.floor(Math.random() * lightColors.length)),1);
    randomColor.push(randomizer);
  };
  $("#Q").css({"background":randomColor[0]}).val(randomColor[0]);
  $("#W").css({"background":randomColor[1]}).val(randomColor[1]);
  $("#E").css({"background":randomColor[2]}).val(randomColor[2]);
  $("#R").css({"background":randomColor[3]}).val(randomColor[3]);
}

function pTwoButtonGenerator(){
  var darkColors=["#990000", "#0059b3", "#008000", "#cc5100"];
  var randomColor=[];
  for (var x=0;x<4;x++){
    var randomizer = darkColors.splice((Math.floor(Math.random() * darkColors.length)),1);
    randomColor.push(randomizer);
  };
  $("#U").css({"background":randomColor[0]}).val(randomColor[0]);
  $("#I").css({"background":randomColor[1]}).val(randomColor[1]);
  $("#O").css({"background":randomColor[2]}).val(randomColor[2]);
  $("#P").css({"background":randomColor[3]}).val(randomColor[3]);
}

//EVENT LISTENER TO CHECK FOR BUTTON PRESS OF THE 4 VALID KEYS
function playerOneInput(){
  $("body").on("keypress", function charInput(e){
    pOneChoice = String.fromCharCode(e.which);
    if (playerOneKeys.indexOf(pOneChoice)>=0){
      playerOneGame();
    }
  });
}

function playerTwoInput(){
  $("body").on("keypress", function charInput(b){
    pTwoChoice = String.fromCharCode(b.which);
    if (playerTwoKeys.indexOf(pTwoChoice)>=0){
      playerTwoGame();
    };
  });
}

//COMPARE THE BUTTON PRESSED TO THE VALID KEYS AND IF FOUND, CHECK IF CORRECT ANSWER
function playerOneGame(){
  for (var x=0;x<playerOneKeys.length;x++){
    if (pOneChoice==playerOneKeys[x]){
      var $temp = $("#"+playerOneKeys[x].toUpperCase());
      pOneCheckInput($temp.val());
    }
  }
}

function playerTwoGame(){
  for (var y=0;y<playerTwoKeys.length;y++){
    if (pTwoChoice==playerTwoKeys[y]){
      var $temp = $("#"+playerTwoKeys[y].toUpperCase());
      pTwoCheckInput($temp.val());
    }
  }
}

//ACTIONS TO TAKE IF ANSWER IS CORRECT OR INCORRECT
function pOneCheckInput(value){
  if (value==pOneCorrectColor){
    correct.play();
    movePlayerOne();
  } else {
    $("#pOneDisplayBox").addClass("animated shake");
    resetOnePellet();
    $("#pOneDisplayBox").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function rest(){;
    $("#pOneDisplayBox").removeClass("animated shake");})
  };
    clearTimeout(timeOverOne);
    wrong.play();
    lightColorGenerator()
    wordGenerator($playerOne);
    pOneButtonGenerator();
    resetTime($("#pOneProgressBar"));
    resetOneBar();
}

function pTwoCheckInput(value){
  if (value==pTwoCorrectColor){
    correct.play();
    movePlayerTwo();
  } else {
    $("#pTwoDisplayBox").addClass("animated shake");
    resetTwoPellet();
    $("#pTwoDisplayBox").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function rest(){;
    $("#pTwoDisplayBox").removeClass("animated shake");})
  };
    clearTimeout(timeOverTwo);
    wrong.play();
    darkColorGenerator()
    wordGenerator($playerTwo);
    pTwoButtonGenerator();
    resetTime($("#pTwoProgressBar"));
    resetTwoBar();
}

//RESET TIMER AND START ANIMATION
function resetOneBar() {
  $("#pOneProgressBar").find('div').animate({"height":"0%"}, 5000);
  timeOverOne=setTimeout(pOneCheckInput,5000);
}

function resetTwoBar() {
  $("#pTwoProgressBar").find('div').animate({"height":"0%"}, 5000);
  timeOverTwo=setTimeout(pTwoCheckInput,5000);
}

//RESET PROGRESS BAR TO FULL STATE
function resetTime($section){
  $section.find("div").stop().css({ "height": "100%" });
}

//MOVE PELLET AND CHECK IF PLAYER HAS REACHED DETSINATION
function movePlayerOne(){
  $("#colorPellet").animate({"left":"+=5%"},500);
  checkWinOne = checkWinOne+1;
  if (checkWinOne>=15){
    setTimeout(gameOver,700);
  }
}

function movePlayerTwo(){
  $("#blackPellet").animate({"right":"+=5%"},500);
  checkWinTwo = checkWinTwo+1;
  if (checkWinTwo>=15){
    setTimeout(gameOver,700);
  }
}

//RESET PELLET TO ORIGINAL STATE IF INCORRECT ANSWER IS RECEIVED OR TIME RUNS OUT
function resetOnePellet(){
  $("#colorPellet").addClass("animated zoomOut");
  setTimeout(function(){
    $("#colorPellet").removeClass("animated zoomOut").css({"left":"15%","height":"40px","width":"40px"});
  }, 500);
  checkWinOne=0;
}

function resetTwoPellet(){
  $("#blackPellet").addClass("animated zoomOut");
  setTimeout(function(){
    $("#blackPellet").removeClass("animated zoomOut").css({"right":"15%","height":"40px","width":"40px"});
  }, 500);
  checkWinTwo=0;
}

//ACTIONS TO TAKE WHEN EITHER PLAYER HAS WON
function gameOver(){
  $(".mainBox").hide();
  wrong.mute();
  if (checkWinOne>=15){
    $("body").css({"background-image": "url(\"./Images/Game Over Player 1.png\")"});
    $("#gameOverBoxOne").removeClass("hide");
    $(".newGame").on("click", function restart(){
      location.reload();
    });
  } else {
    $("body").css({"background-image": "url(\"./Images/Game Over Player 2.png\")"});
    $("#gameOverBoxTwo").removeClass("hide");
    $(".newGame").on("click", function restart(){
      location.reload();
    });
  }
}

//ANIMATED EFFECT TO GIVE USERS A MOMENT BEFORE TIMER STARTS
function countDown(){
  setTimeout(function(){
    $("#three").removeClass("hide").addClass("animated rotateIn");
  },500);
  setTimeout(function(){
    $("#three").removeClass("animated rotateIn").addClass("hide");
    $("#two").removeClass("hide").addClass("animated rotateIn");
  },2000);
  setTimeout(function(){
    $("#two").removeClass("animated rotateIn").addClass("hide");
    $("#one").removeClass("hide").addClass("animated rotateIn");
  },4000);
    setTimeout(function(){
    $("#one").removeClass("animated rotateIn").addClass("hide");
  },6000);
  setTimeout(start, 6000);
}

//INITIAL CALL OF FUNCTIONS FOR GAME TO BEGIN
function start(){
  resetOneBar();
  resetTwoBar();
  lightColorGenerator();
  darkColorGenerator();
  wordGenerator($playerOne);
  wordGenerator($playerTwo);
  pOneButtonGenerator();
  pTwoButtonGenerator();
  playerOneInput();
  playerTwoInput();
}

//INDEX PAGE INSTRUCTIONS FOR DISPLAYING DIVS
setTimeout(function beginPlayer(){
  $("#players").addClass("animated bounceInDown").removeClass("hide");
},500);
setTimeout(function beginInstructions(){
  $("#instructionButton").addClass("animated bounceInDown").removeClass("hide");
},700);
setTimeout(function beginStart(){
  $("#startGame").addClass("animated bounceInDown").removeClass("hide");
},900);

$("#startGame").on("click", function instructions(){
  $("#startScreen").addClass("hide");
  $("body").css({"background-image": "url(\"./Images/MainBackground.png\")"});
  $("section").removeClass("hide");
  countDown();
});

$("#instructionButton").on("click", function instructions(){
  $("#startScreen").addClass("hide");
  $("#instructions").addClass("animated slideInRight").removeClass("hide");
});

$("#players").on("click", function instructions(){
  $("#startScreen").addClass("hide");
  $("#playerSlides1").addClass("animated slideInRight").removeClass("hide");
});

$("#next").on("click", function instructions(){
  $("#playerSlides1").addClass("hide");
  $("#playerSlides2").addClass("animated slideInRight").removeClass("hide");
});

$("#menuOne").on("click", function instructions(){
  $("#instructions").addClass("hide");
  $("#startScreen").addClass("animated slideInRight").removeClass("hide");
});

$("#menuTwo").on("click", function instructions(){
  $("#playerSlides2").addClass("hide");
  $("#startScreen").addClass("animated slideInRight").removeClass("hide");
});

});