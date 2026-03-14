let current="X"

function startGame(){

let board=document.getElementById("board")

board.innerHTML=""

for(let i=0;i<9;i++){

let cell=document.createElement("div")

cell.classList.add("cell")

cell.onclick=function(){

if(cell.innerText==""){

cell.innerText=current

current=current=="X"?"O":"X"

}

}

board.appendChild(cell)

}

}
