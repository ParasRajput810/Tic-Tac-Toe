const Winingconditions = [[2,4,6] , [0,4,8] , [0,3,6],[1,4,7] , [2,5,8],[0,1,2],[3,4,5],[6,7,8]];
const playerXmoves= [];
let player = "X";
const playerOmoves = [];
let winnerDecElement = document.getElementById("winnerDeclartion");

function newclick(event){
    let targetelement = event.target;

    if(player == "X"){
        targetelement.removeAttribute("onclick");
        playerXmoves.push(Number.parseInt( targetelement.getAttribute('value')));
        targetelement.innerHTML = "X";
        for(let i=0 ; i<=Winingconditions.length-1 ; i++){
            if(Winingconditions[i].every(elem => playerXmoves.includes(elem))){
                console.log("Player X won");
                disablerepeated(targetelement);
                winnerDecElement.innerHTML = "<h1>Player X Won</h1>"
            }
        }
        player = "O"
    }
    else{
        playerOmoves.push(Number.parseInt( targetelement.getAttribute('value')));
        targetelement.innerHTML = "O";
        targetelement.removeAttribute("onclick");
        for(let i=0 ; i<=Winingconditions.length-1 ; i++){
            if(Winingconditions[i].every(elem => playerOmoves.includes(elem))){
                console.log("player O Won");
                disablerepeated(targetelement);
                winnerDecElement.innerHTML = "<h1>Player O Won</h1>"
            }
        }
        player = "X"
    }

   
}

function pageRef(event){
    location.reload();
}

function disablerepeated(targetelement){
    const parent = targetelement.parentNode;
    const siblings = parent.children;
    for(let i = 0 ; i<siblings.length ;i++){
        siblings[i].onclick = null;
    }
}