const arr = [[2,4,6] , [0,4,8] , [0,3,6],[1,4,7] , [2,5,8],[0,1,2],[3,4,5],[6,7,8]];
const testarr= [];
let player = "X";
const test2arr = [];
let winnerElem = document.getElementById("winnerDeclartion");

function newclick(event){
    let targetelement = event.target;

    if(player == "X"){
        targetelement.removeAttribute("onclick");
        testarr.push(Number.parseInt( targetelement.getAttribute('value')));
        targetelement.innerHTML = "X";
        console.log(player , testarr);
        for(let i=0 ; i<=arr.length-1 ; i++){
            if(arr[i].every(elem => testarr.includes(elem))){
                console.log("Player X won");
                disablerepeated(targetelement);
                winnerElem.innerHTML = "<h1>Player X Won</h1>"
            }
        }
        player = "O"
    }
    else{
        test2arr.push(Number.parseInt( targetelement.getAttribute('value')));
        targetelement.innerHTML = "O";
        targetelement.removeAttribute("onclick");
        console.log(player , test2arr);
        for(let i=0 ; i<=arr.length-1 ; i++){
            if(arr[i].every(elem => test2arr.includes(elem))){
                console.log("player O Won");
                disablerepeated(targetelement);
                winnerElem.innerHTML = "<h1>Player O Won</h1>"
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