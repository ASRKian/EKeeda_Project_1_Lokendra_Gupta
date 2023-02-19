let player = "X";
let gameOver = false;

window.onload = () =>{
    let gamebox = document.getElementsByClassName('game');

for (button of gamebox) {
    button.addEventListener('click', onClicked)
}

document.getElementById('reset').addEventListener('click', resetGame);
}

const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 7],
    [0, 4, 8],
    [2, 4, 6]
]
function checkWin() {
    for (let i = 0; i < 8; i++) {
        let win = wins[i];
        let cell1 = document.getElementById(win[0].toString()).innerText;
        let cell2 = document.getElementById(win[1].toString()).innerText;
        let cell3 = document.getElementById(win[2].toString()).innerText;
        if (cell1 === cell2 && cell2 === cell3 && cell1 !== '') {
            gameOver = true;
            document.querySelector('#result').innerHTML = '\'' + player + '\'' + ' has WON';
        }
    }

    let draw = Array.prototype.filter.call(document.getElementsByClassName('game'),
        (item) => item.innerHTML === '').length === 0;

    if (draw) {
        gameOver = true;
        document.querySelector('#result').innerHTML = '"Match has been drawn!"'
        console.log(gameOver);
    }
}

function changePlayer() {
    player = player === 'X' ? 'O' : 'X';
}

function onClicked(event) {
    if (event.target.innerText !== '' || gameOver) {
        return;
    }
    else {
        event.target.innerText = player;
        checkWin()
        changePlayer()
        if (!gameOver) {
            document.querySelector('#result').innerText = "It's " + player + '\'s turn';
            return
        }
    }
}

function resetGame() {
    gameOver = false;
    player = 'X';
    document.querySelector('#result').innerText = "It's " + player + '\'s turn';   
    Array.prototype.forEach.call(document.getElementsByClassName('game'),
        (item) => item.innerHTML = '');
}