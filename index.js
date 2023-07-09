
var isZero = true;
//new line added
// var idArray = [];
var zeroArray = [];
var crossArray = [];
var zeroWins = false;
var crossWins = false;
var winningArrays = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]
const OXboxes = document.querySelectorAll(".box");

let checkTurns = () => isZero ? document.getElementById("para").innerHTML = "O's Turn" : document.getElementById("para").innerHTML = "X's Turn";

let myFunctionForOX = (data) => {
    console.log(data);
    let selectedId = document.getElementById(data.target.id);

    if (isZero) {
        selectedId.innerHTML = "O";
        isZero = false;
    }
    else {
        selectedId.innerHTML = "X";
        isZero = true;
    }
    selectedId.removeEventListener("click", myFunctionForOX);
    checkTurns();

    objectCheck({ id: data.target.id, value: data.target.innerText });
}

var start = () => {
    zeroArray = [];
    crossArray = [];
    isZero = true;
    checkTurns();
    OXboxes.forEach(x => {
        x.innerHTML = "";
        x.addEventListener("click", myFunctionForOX);
    });
}

const objectCheck = (data) => {
    if (data.value == "O") zeroArray.push(+data.id);
    if (data.value == "X") crossArray.push(+data.id);

    winningArrays.forEach(winArry => {

        zeroWins = zeroArray.length >= 3 ? zeroArray.every(selectedId => winArry.includes(selectedId)) : false;
        crossWins = crossArray.length >= 3 ? crossArray.every(selectedId => winArry.includes(selectedId)) : false;

        if (zeroWins || crossWins) {
            document.getElementById("para").innerHTML = (zeroWins ? "O wins!!!" : crossWins ? "X wins!!!" : "Draw!!!");
            // rem();
            OXboxes.forEach(x => x.removeEventListener("click", myFunctionForOX));
            // asdfadsf


        }
    })
}

document.getElementById("resButton").addEventListener("click", (event) => start());
start();