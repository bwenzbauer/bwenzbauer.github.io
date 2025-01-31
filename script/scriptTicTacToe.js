let xTurn = true;

function changeMark(buttonId) {
    let currentMark = document.getElementById(buttonId).innerHTML;

    if (!currentMark) {
        if (xTurn) {
            document.getElementById(buttonId).innerHTML = "X";
            document.getElementById(buttonId).style = "color: #FFFFFF";
        }
        else {
            document.getElementById(buttonId).innerHTML = "O";
            document.getElementById(buttonId).style = "color:rgb(0, 0, 0)";
        }

        xTurn = !xTurn;
        checkWin();
    }
}

function resetGame(resetGame) {
    document.getElementById("a1").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c3").innerHTML = "";
    document.getElementById('winner').innerHTML = "";
    document.getElementById("btn2").style = "background-color: ";
    document.getElementById("btn3").style = "background-color: ";
}

function checkWin(checkWin) {
    let a1 = document.getElementById("a1").innerHTML;
    let b1 = document.getElementById("b1").innerHTML;
    let c1 = document.getElementById("c1").innerHTML;
    let a2 = document.getElementById("a2").innerHTML;
    let b2 = document.getElementById("b2").innerHTML;
    let c2 = document.getElementById("c2").innerHTML;
    let a3 = document.getElementById("a3").innerHTML;
    let b3 = document.getElementById("b3").innerHTML;
    let c3 = document.getElementById("c3").innerHTML;

    //Straight Across X
    if (a1 == b1 && b1 == c1 && a1 == "X") {
        let result = "X"
        document.getElementById('winner').innerHTML = result;
        document.getElementById("btn2").style = "background-color: #9f2915";
        document.getElementById("btn3").style = "background-color: #2e5a4b";
    }
    if (a2 == b2 && b2 == c2 && a2 == "X") {
        let result = "X"
        document.getElementById('winner').innerHTML = result;
        document.getElementById("btn2").style = "background-color: #9f2915";
        document.getElementById("btn3").style = "background-color: #2e5a4b";
    }
    if (a3 == b3 && b3 == c3 && a3 == "X") {
        let result = "X"
        document.getElementById('winner').innerHTML = result;
        document.getElementById("btn2").style = "background-color: #9f2915";
        document.getElementById("btn3").style = "background-color: #2e5a4b";
    }
    //Straight Down X
    if (a1 == a2 && a2 == a3 && a1 == "X") {
        let result = "X"
        document.getElementById('winner').innerHTML = result;
        document.getElementById("btn2").style = "background-color: #9f2915";
        document.getElementById("btn3").style = "background-color: #2e5a4b";
    }
    if (b1 == b2 && b2 == b3 && b1 == "X") {
        let result = "X"
        document.getElementById('winner').innerHTML = result;
        document.getElementById("btn2").style = "background-color: #9f2915";
        document.getElementById("btn3").style = "background-color: #2e5a4b";
    }
    if (c1 == c2 && c2 == c3 && c1 == "X") {
        let result = "X"
        document.getElementById('winner').innerHTML = result;
        document.getElementById("btn2").style = "background-color: #9f2915";
        document.getElementById("btn3").style = "background-color: #2e5a4b";
    }
    //Diagonals X
    if (a1 == b2 && b2 == c3 && a1 == "X") {
        let result = "X"
        document.getElementById('winner').innerHTML = result;
        document.getElementById("btn2").style = "background-color: #9f2915";
        document.getElementById("btn3").style = "background-color: #2e5a4b";
    }
    if (c1 == b2 && b2 == a3 && c1 == "X") {
        let result = "X"
        document.getElementById('winner').innerHTML = result;
        document.getElementById("btn2").style = "background-color: #9f2915";
        document.getElementById("btn3").style = "background-color: #2e5a4b";
    }


    //Straight Across O
    if (a1 == b1 && b1 == c1 && a1 == "O") {
        let result = "O"
        document.getElementById('winner').innerHTML = result;
        document.getElementById("btn2").style = "background-color: #9f2915";
        document.getElementById("btn3").style = "background-color: #2e5a4b";
    }
    if (a2 == b2 && b2 == c2 && a2 == "O") {
        let result = "O"
        document.getElementById('winner').innerHTML = result;
        document.getElementById("btn2").style = "background-color: #9f2915";
        document.getElementById("btn3").style = "background-color: #2e5a4b";
    }
    if (a3 == b3 && b3 == c3 && a3 == "O") {
        let result = "O"
        document.getElementById('winner').innerHTML = result;
        document.getElementById("btn2").style = "background-color: #9f2915";
        document.getElementById("btn3").style = "background-color: #2e5a4b";
    }
    //Straight Down O
    if (a1 == a2 && a2 == a3 && a1 == "O") {
        let result = "O"
        document.getElementById('winner').innerHTML = result;
        document.getElementById("btn2").style = "background-color: #9f2915";
        document.getElementById("btn3").style = "background-color: #2e5a4b";
    }
    if (b1 == b2 && b2 == b3 && b1 == "O") {
        let result = "O"
        document.getElementById('winner').innerHTML = result;
        document.getElementById("btn2").style = "background-color: #9f2915";
        document.getElementById("btn3").style = "background-color: #2e5a4b";
    }
    if (c1 == c2 && c2 == c3 && c1 == "O") {
        let result = "O"
        document.getElementById('winner').innerHTML = result;
        document.getElementById("btn2").style = "background-color: #9f2915";
        document.getElementById("btn3").style = "background-color: #2e5a4b";
    }
    //Diagonals O
    if (a1 == b2 && b2 == c3 && a1 == "O") {
        let result = "O"
        document.getElementById('winner').innerHTML = result;
        document.getElementById("btn2").style = "background-color: #9f2915";
        document.getElementById("btn3").style = "background-color: #2e5a4b";
    }
    if (c1 == b2 && b2 == a3 && c1 == "O") {
        let result = "O"
        document.getElementById('winner').innerHTML = result;
        document.getElementById("btn2").style = "background-color: #9f2915";
        document.getElementById("btn3").style = "background-color: #2e5a4b";
    }
}