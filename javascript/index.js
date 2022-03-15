// here appending all the cells on the board

let board_container = document.getElementById("board_container");

let odd_row = 100;
let even_row = 81;

for (let r = 1; r < 11; r++) {
    let row = document.createElement("div");
    row.classList.add("rows")
    // row.setAttribute("id", r);
    board_container.appendChild(row);

    for (let c = 1; c < 11; c++) {
       let cell = document.createElement("div");
       cell.classList.add("cell");
       if( r % 2 == 0){
           cell.setAttribute("id", even_row)
           cell.innerText = even_row++
           if( c % 2 == 0){
               cell.style.background = "pink"
           }
       }
       else{
           cell.setAttribute("id",odd_row)
           cell.innerText = odd_row--;
           if( c % 2 != 0){
            cell.style.background = "orange"
        }
       }
       row.appendChild(cell)
    }
    if( r % 2 == 0){
        odd_row = odd_row-10
    }
    else if( r > 1){
        even_row = even_row - 30;
    }
 
}


// here is code for handling dice 

let dice_img_div = document.querySelector(".dice_img_div")

let dice1 = document.querySelector("#p1_dice");
let dice2 = document.querySelector("#p2_dice");
let player1 = document.getElementById("player1")

player1.onclick = ()=>{
    Decision()
}

function Decision() {
  let d1 = Math.floor(Math.random() * 6) +1;
  let d2 = Math.floor(Math.random() * 6) + 1;
  let timer = setTimeout(() => {
    dice1.src = "../images/dice/dice" + d1 + ".png";
    dice2.src = "./images/dice/dice" + d2 + ".png";
    dice_img_div.style.visibility = "visible"
  }, 500);

 
}



