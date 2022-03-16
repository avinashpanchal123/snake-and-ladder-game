// here is code for handling dice

let dice_img_div = document.querySelector(".dice_img_div");

let dice1 = document.querySelector("#p1_dice");
let dice2 = document.querySelector("#p2_dice");
let player1 = document.getElementById("player1");

let flag = true;

player1.onclick = () => {
  Decision();
};

function Decision() {
  // let d1 = Math.floor(Math.random() * 6) + 1;
  let d1 = 1;

  let d2 = Math.floor(Math.random() * 6) + 1;
  let timer = setTimeout(() => {
    dice1.src = "../images/dice/dice" + d1 + ".png";
    if (flag == true) {
      handlePosition(d1);
    } else {
      handlePosition1(d1);
    }
    dice2.src = "./images/dice/dice" + d2 + ".png";
    dice_img_div.style.visibility = "visible";
  }, 500);
}

let main_container = document.querySelector(".main_container");

let p1 = document.getElementById("p1");

console.log(positionX);

main_container.appendChild(p1);

var positionX = 0;
var positionY = 0;

function handlePosition(moves_right) {
  for (let i = 0; i < moves_right; i++) {
    positionX = positionX + 3.5;
    if (positionX < 35 && positionX >= 0 && positionY <= 0 && positionY > -35) {
      p1.style.transform = `translate(${positionX}rem, ${positionY}rem)`;
    } else {
      positionX = 31.5;
      positionY = positionY - 3.5;
      p1.style.transform = `translate(${positionX}rem,${positionY}rem)`;
      flag = !flag;
      handlePosition1(moves_right - i - 1);
      break;
    }
  }
  // alert([positionX, positionY]);

  if (positionY == 0 && positionX == 10.5) {
    // small_ladder();
  } else if (positionY == -7 && positionX == 24.5) {
    // big_ladder();
  } else if (positionX == 21 && positionY == -21) {
    // medium_ladder();
  } else if (positionX == 0 && positionY == -28) {
    // leftSide_snake();
  }
}

function handlePosition1(moves_left) {
  if (positionX <= 21 && positionY == -31.5) {
    go_to_Home(moves_left);
  } else {
    for (let i = 0; i < moves_left; i++) {
      if (
        positionX < 35 &&
        positionX > 0 &&
        positionY <= 0 &&
        positionY > -35
      ) {
        positionX = positionX - 3.5;
        p1.style.transform = `translate(${positionX}rem,${positionY}rem)`;
      } else {
        flag = true;
        positionY = positionY - 3.5;
        p1.style.transform = `translateY(${positionY}rem)`;
        positionX = 0;
        handlePosition(moves_left - i - 1);
        break;
      }
    }
  }

  // alert([positionX, positionY]);

  if (positionX == 7 && positionY == -10.5) {
    // medium_ladder01();
  } else if (positionX == 31.5 && positionY == -10.5) {
    // small_ladder01();
  } else if (positionX == 10.5 && positionY == -10.5) {
    // medium_snake();
  } else if (positionX == 31.5 && positionY == -24.5) {
    // long_snake();
  } else if (positionX == 7 && positionY == -31.5) {
    // soLong_snake();
  } else if (positionX == 17.5 && positionY == -24.5) {
    // medium2_snake();
  }
}

function small_ladder() {
  positionY = positionY - 3.5;
  positionX = positionX + 10.5;
  p1.style.transform = `translate(${positionX}rem,${positionY}rem)`;
  flag = false;
}

function big_ladder() {
  positionX = positionX - 14;
  positionY = positionY - 21;
  p1.style.transform = `translate(${positionX}rem,${positionY}rem)`;
  flag = true;
}

function medium_ladder01() {
  // alert("I am called")
  positionX = positionX - 7;
  positionY = positionY - 10.5;
  p1.style.transform = `translate(${positionX}rem,${positionY}rem)`;
  flag = true;
}

function medium_ladder() {
  positionX = positionX + 7;
  positionY = positionY - 10.5;
  p1.style.transform = `translate(${positionX}rem,${positionY}rem)`;
  flag = false;
}

function small_ladder01() {
  positionX = positionX - 3.5;
  positionY = positionY - 7;
  p1.style.transform = `translate(${positionX}rem,${positionY}rem)`;
  flag = false;
}

function medium_snake() {
  positionX = positionX - 3.5;
  positionY = positionY + 10.5;
  p1.style.transform = `translate(${positionX}rem,${positionY}rem)`;
  flag = true;
}

function long_snake() {
  alert("I am called");
  positionX = positionX - 14;
  positionY = positionY + 17.5;
  p1.style.transform = `translate(${positionX}rem,${positionY}rem)`;
  flag = true;
}

function soLong_snake() {
  positionX = positionX - 7;
  positionY = positionY + 28;
  p1.style.transform = `translate(${positionX}rem,${positionY}rem)`;
  flag = false;
}

function leftSide_snake() {
  positionX = positionX + 7;
  positionY = positionY + 10.5;
  p1.style.transform = `translate(${positionX}rem,${positionY}rem)`;
  flag = false;
}

function medium2_snake() {
  positionX = positionX + 7;
  positionY = positionY + 14;
  p1.style.transform = `translate(${positionX}rem,${positionY}rem)`;
  flag = false;
}

function go_to_Home(moves_left) {
 
  let move = moves_left * 3.5
  positionX = positionX - move  
  alert(positionX)

  if( positionX  == 0){
    
    p1.style.transform = `translate(${positionX}rem,${positionY}rem)`;
    alert("you win the game")
  }
  else if( positionX > 0) {
  
    p1.style.transform = `translate(${positionX}rem,${positionY}rem)`;
  }
}
