
// here is code for handling dice 

let dice_img_div = document.querySelector(".dice_img_div")

let dice1 = document.querySelector("#p1_dice");
let dice2 = document.querySelector("#p2_dice");
let player1 = document.getElementById("player1");

let flag = true;

player1.onclick = ()=>{
    Decision()
}

function Decision() {
  let d1 = Math.floor(Math.random() * 6) +1;
  
  let d2 = Math.floor(Math.random() * 6) + 1;
  let timer = setTimeout(() => {
    dice1.src = "../images/dice/dice" + d1 + ".png";
    if( flag == true){
        handlePosition(d1)
    }
    else{
        handlePosition1(d1)
    }
    dice2.src = "./images/dice/dice" + d2 + ".png";
    dice_img_div.style.visibility = "visible"
  }, 500);

 
}





let main_container = document.querySelector(".main_container");

let p1 = document.getElementById("p1");


console.log(positionX);

main_container.appendChild(p1)

var positionX = 0;
var positionY = 0;
left = 1;
function handlePosition(moves_right){
   
    for (let i = 0; i < moves_right; i++) {
        positionX++;
        if( positionX < 10){
          
            p1.style.transform = `translate(${positionX * 3.8}rem, ${positionY}vh)`
           
        }
        else{
           
            positionX = 34.2;
            positionY = positionY - 10
            p1.style.transform = `translate(${positionX}rem,${positionY}vh)`;
            flag = !flag;
            handlePosition1(moves_right-i-1)
            break;
        }
    }
}



function handlePosition1(moves_left){
    
    
    for (let i = 0; i < moves_left; i++) {
        
       if( positionX > 0){
        positionX = positionX - 3.8;
        p1.style.transform = `translate(${positionX}rem,${positionY}vh)`
       }
       else{
           flag = true;
           positionY = positionY - 10;
           p1.style.transform = `translateY(${positionY}vh)`
           positionX = 0;
           handlePosition(moves_left-i-1);
           break;
       }
    }
    
}