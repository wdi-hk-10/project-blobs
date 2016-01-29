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
}

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
}

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
}

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

function pOneCheckInput(value){
  if (value==pOneCorrectColor){
    clearTimeout(timeOverOne);
    lightColorGenerator()
    wordGenerator($playerOne);
    pOneButtonGenerator();
    resetTime($("#pOneProgressBar"));
    movePlayerOne();
    timeOverOne=setTimeout(function(){
      resetOnePellet();
      resetTime($("#pOneProgressBar"));
      },5000);
  } else {
    resetOnePellet();
    resetTime($("#pOneProgressBar"));
  };
}

function pTwoCheckInput(value) {
  if (value==pTwoCorrectColor){
    clearTimeout(timeOverTwo);
    darkColorGenerator()
    wordGenerator($playerTwo);
    pTwoButtonGenerator();
    resetTime($("#pTwoProgressBar"));
    movePlayerTwo();
    timeOverTwo=setTimeout(function(){
      resetTwoPellet();
      resetTime($("#pTwoProgressBar"));
      },5000);
  } else {
    resetTwoPellet();
    resetTime($("#pTwoProgressBar"));
  };
}

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
}

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
}

function playerProgress($element) {
  $element.find('div').animate({ "height": "0%" }, 5000);
}

function resetTime($section){
  $section.find("div").stop().css({ "height": "100%" });
  playerProgress($section);
}

function gameOver(){
  $(".mainBox").hide();
  if (checkWinOne>=9){
    $("#gameOverBoxOne").removeClass("hide");
    $(".newGame").on("click", function restart(){
      location.reload();
    });
  } else {
    $("#gameOverBoxTwo").removeClass("hide");
    $(".newGame").on("click", function restart(){
      location.reload();
    });
  }
}

function movePlayerOne(){
  $("#colorPellet").animate({"left":"+=10%"},500);
  checkWinOne = checkWinOne+1;
  if (checkWinOne>=5){
    setTimeout(gameOver,500);
  }
}

function movePlayerTwo(){
  $("#blackPellet").animate({"right":"+=10%"},500);
  checkWinTwo = checkWinTwo+1;
  if (checkWinTwo>=9){
    setTimeout(gameOver,500);
  }
}

function countDown(){
  setTimeout(function(){
    $("#three").removeClass("hide");
  },500);
  setTimeout(function(){
    $("#three").addClass("hide");
    $("#two").removeClass("hide");
  },2000);
  setTimeout(function(){
    $("#two").addClass("hide");
    $("#one").removeClass("hide");
  },4000);
    setTimeout(function(){
    $("#one").addClass("hide");
  },6000);
  setTimeout(start, 6000);
}

function resetOnePellet(){
  $("#colorPellet").animate({"height":"0px","width":"0px"},500);
  setTimeout(function(){
    $("#colorPellet").stop().css({"left":"20px","height":"70px","width":"70px"});
  }, 400);
  checkWinOne=0;
}

function resetTwoPellet(){
  $("#blackPellet").animate({"height":"0px","width":"0px"},500);
  setTimeout(function(){
    $("#blackPellet").stop().css({"right":"20px","height":"70px","width":"70px"});
  }, 400);
  checkWinTwo=0;
}

function start(){
  playerProgress($("#pOneProgressBar"));
  playerProgress($("#pTwoProgressBar"));
  lightColorGenerator();
  darkColorGenerator();
  wordGenerator($playerOne);
  wordGenerator($playerTwo);
  pOneButtonGenerator();
  pTwoButtonGenerator();
  playerOneInput();
  playerTwoInput();
}

$("#startGame").on("click", function instructions(){
  $("#startScreen").addClass("hide");
  $("#instructions").removeClass("hide");
});

$("#next").on("click", function instructions(){
  $("#instructions").addClass("hide");
  $("section").removeClass("hide");
  countDown();
});

});