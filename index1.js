let ids = document.querySelectorAll(".box");

var isZero = true;
// console.log(ids);

var idArray = [];

var indexZero;
var indexOne;
var indexTwo;
var indexThree;
var indexFour;
var indexFive;
var indexSix;
var indexSeven;
var indexEight;

let turnFunction = (checkZero) => {
    checkZero ? document.getElementById("para").innerHTML = "O's Turn" : document.getElementById("para").innerHTML = "X's Turn";
}


let myFunctionForOX = (data) => {
    // console.log(data);
    var selectedId = document.getElementById(data.target.id);

    // console.log(selectedId);

    if (isZero) {
        selectedId.innerHTML = "O";
        isZero = false;
    }
    else {
        selectedId.innerHTML = "X";
        isZero = true;
    }
    selectedId.removeEventListener("click", myFunctionForOX);
    let newObj = { id: data.target.id, value: data.target.innerText }
    idArray.push(newObj);
    turnFunction(isZero);


    // console.log(data.target);
    // console.log(idArray);



    objectCheck(newObj);
}

const start = () => {
    ids.forEach(x => {
        x.addEventListener("click", myFunctionForOX);
    })
    myFunctionForOX();
}

const objectCheck = () => {



    if (ids[0].innerHTML != "") {
        indexZero = idArray.find(({ id }) => id === '0').value;
        // console.log(indexZero);
    }

    if (ids[1].innerHTML != "") {
        indexOne = idArray.find(({ id }) => id === '1').value;
        // console.log(indexOne);
    }

    if (ids[2].innerHTML != "") {
        indexTwo = idArray.find(({ id }) => id === '2').value;
        // console.log(indexTwo);
    }

    if (ids[3].innerHTML != "") {
        indexThree = idArray.find(({ id }) => id === '3').value;
        // console.log(indexThree);
    }
    if (ids[4].innerHTML != "") {
        indexFour = idArray.find(({ id }) => id === '4').value;
        // console.log(indexFour);
    }

    if (ids[5].innerHTML != "") {
        indexFive = idArray.find(({ id }) => id === '5').value;
        // console.log(indexFive);
    }

    if (ids[6].innerHTML != "") {
        indexSix = idArray.find(({ id }) => id === '6').value;
        // console.log(indexSix);
    }

    if (ids[7].innerHTML != "") {
        indexSeven = idArray.find(({ id }) => id === '7').value;
        // console.log(indexSeven);
    }

    if (ids[8].innerHTML != "") {
        indexEight = idArray.find(({ id }) => id === '8').value;
        // console.log(indexEight);
    }
    winConditions();

}


const winConditions = () => {
    let oWinConditions = ((indexZero == 'O' && indexOne == 'O' && indexTwo == 'O') || (indexZero == 'O' && indexThree == 'O' && indexSix == 'O') || (indexZero == 'O' && indexFour == 'O' && indexEight == 'O') || (indexSix == 'O' && indexSeven == 'O' && indexEight == 'O') || (indexTwo == 'O' && indexFive == 'O' && indexEight == 'O') || (indexOne == 'O' && indexFour == 'O' && indexSeven == 'O') || (indexThree == 'O' && indexFour == 'O' && indexFive == 'O'));

    let xWinConditions = ((indexZero == 'X' && indexOne == 'X' && indexTwo == 'X') || (indexZero == 'X' && indexThree == 'X' && indexSix == 'X') || (indexZero == 'X' && indexFour == 'X' && indexEight == 'X') || (indexSix == 'X' && indexSeven == 'X' && indexEight == 'X') || (indexTwo == 'X' && indexFive == 'X' && indexEight == 'X') || (indexOne == 'X' && indexFour == 'X' && indexSeven == 'X') || (indexThree == 'X' && indexFour == 'X' && indexFive == 'X'));


    if (oWinConditions) {
        document.getElementById("para").innerHTML = "O wins!!";
        rem();
    }

    else if (xWinConditions) {
        document.getElementById("para").innerHTML = "x wins!!";
        rem();
    }
    if (idArray.length == 8) {
        alert("Draw!!!");
        rem();
    }
}

const reload = () => {
    location.reload();
}
const rem = () => {
    ids.forEach(x => {
        x.removeEventListener("click", myFunctionForOX);
    })
}
let btn = document.getElementById("resButton");

btn.addEventListener("click", (event) => {
    location.reload();
})

start();