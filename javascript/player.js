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
    // let d1 = Math.floor(Math.random() * 6) +1;
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
    positionX = positionX + 3.8;
    if (positionX < 38) {
      p1.style.transform = `translate(${positionX}rem, ${positionY}vh)`;
    } else {
      positionX = 34.2;
      positionY = positionY - 10;
      p1.style.transform = `translate(${positionX}rem,${positionY}vh)`;
      flag = !flag;
      handlePosition1(moves_right - i - 1);
      break;
    }
  }
//    alert([positionX, 'I am first']);

  if (positionY == 0 && positionX == (3 * 3.8)) {
    small_ladder();

  } else if (positionY == -20 && positionX == 26.6) {
    big_ladder();
  }
  else if( positionX == 22.8 && positionY == -60){
    medium_ladder()
  }
  else if( positionX == 0 && positionY == -80){
    leftSide_snake()
  }

}

function handlePosition1(moves_left) {
  for (let i = 0; i < moves_left; i++) {
    if (positionX > 0) {
      positionX = positionX - 3.8;
      p1.style.transform = `translate(${positionX}rem,${positionY}vh)`;
    } else {
      flag = true;
      positionY = positionY - 10;
      p1.style.transform = `translateY(${positionY}vh)`;
      positionX = 0;
      handlePosition(moves_left - i - 1);
      break;
    }
  }

//   alert([positionX, "I am second"])
  if( positionX == 7.599999999999999 && positionY == -30){
    medium_ladder01()
  }
  else if( positionX == 34.2 && positionY == -30){
    small_ladder01()
  }
  else if( positionX == 11.399999999999999 && positionY == -30){
    medium_snake()
  }
  else if( positionX == 34.2 && positionY == -70){
      long_snake()
  }
  else if( positionX == 7.599999999999999 && positionY == -90){
      soLong_snake()
  }
  else if( positionX == 19 && positionY == -70){
    medium2_snake()
  }
}

function small_ladder() {
  positionY = positionY - 10;
  positionX = positionX + 11.4;
  p1.style.transform = `translate(${positionX}rem,${positionY}vh)`;
  flag = false;
}

function big_ladder() {
  positionX = positionX - 15.2;
  positionY = positionY - 60;
  p1.style.transform = `translate(${positionX}rem,${positionY}vh)`;
  flag = true;
}


function medium_ladder01(){
    // alert("I am called")
    positionX = positionX - 7.6;
    positionY = positionY - 30;
    p1.style.transform = `translate(${positionX}rem,${positionY}vh)`;
    flag = true;
}


function medium_ladder(){
    positionX = positionX + 7.6;
    positionY = positionY - 30;
    p1.style.transform = `translate(${positionX}rem,${positionY}vh)`;
    flag = false;
}


function small_ladder01(){
    positionX = positionX - 3.8;
    positionY = positionY - 20;
    p1.style.transform = `translate(${positionX}rem,${positionY}vh)`;
    flag = false;
}


function medium_snake(){
    positionX = positionX -3.8;
    positionY = positionY + 30;
    p1.style.transform = `translate(${positionX}rem,${positionY}vh)`;
    flag = true;
}

function long_snake(){
    alert("I am called")
    positionX = positionX - 15.2;
    positionY = positionY + 50;
    p1.style.transform = `translate(${positionX}rem,${positionY}vh)`;
    flag = true;
}


function soLong_snake(){
  
    positionX = positionX - 7.6;
    positionY = positionY + 80;
    p1.style.transform = `translate(${positionX}rem,${positionY}vh)`;
    flag = false;
}


function leftSide_snake(){
    positionX = positionX + 7.6;
    positionY = positionY + 30;
    p1.style.transform = `translate(${positionX}rem,${positionY}vh)`;
    flag = false;
}

function medium2_snake(){
    positionX = positionX + 7.6;
    positionY = positionY + 40;
    p1.style.transform = `translate(${positionX}rem,${positionY}vh)`;
    flag = false;
}