const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const x_class = 'x';
const circle_class = 'circle';

let circleTurn;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



function startGame(){
    circleTurn = false;
    cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true});
})
setBoardHoverClass();
}

startGame();

function handleClick(e){
    const cell = e.target;
    const currentClass = circleTurn ? circle_class : x_class;
    placeMark(cell, currentClass);
    if(checkWin(currentClass)){
        alert('winner')
    }
    swapTurn();
    setBoardHoverClass();
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass);
}

function swapTurn(){
    circleTurn = !circleTurn;
}

function setBoardHoverClass(){
    board.classList.remove(x_class);
    board.classList.remove(circle_class);

    if(circleTurn){
        board.classList.add(circle_class);
    }
    else{
        board.classList.add(x_class);
    }
}

function checkWin(currentClass){
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        })
    })
}