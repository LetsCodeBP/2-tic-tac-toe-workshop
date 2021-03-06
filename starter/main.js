'use strict';
const board = document.querySelector(".board");

let matrix = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

let player = 'x'

//Practice: Add, one cell to the board and set an X in it.
//Hint: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
//Hint: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
//Hint: https://developer.mozilla.org/en-US/docs/Web/API/Element/className
//Hint: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML


function addRowToBoard(board, rowClassName) {
  const row = document.createElement("tr")
  board.appendChild(row)
  row.className = 'row' + rowClassName
}


function addCellToRow(row, cellClassName, cellValue) {
  const cell = document.createElement("td")
  row.appendChild(cell)
  cell.className = cellClassName
  cell.innerHTML = cellValue
}


//-- Main code: Loop through the matrix and draw it’s values

function cellClassNameCreator(rowIndex, columnIndex){
  return 'cell-' + rowIndex + '-' + columnIndex
}

function renderBoard(board, matrix) {
  matrix.forEach((row, rowIndex) => {
    addRowToBoard(board, rowIndex)
    const rowElement = document.querySelector('.row' + rowIndex)
    row.forEach((item, itemIndex) => {
      let className = cellClassNameCreator(rowIndex, itemIndex)
      addCellToRow(rowElement, className, item)
    })
  })
}

renderBoard(board, matrix)



//-- Main code: Setter

function setPlayer(){

}

function setMatrix(matrix, position, player){

}

//Test your solution
// setMatrix([0,1],'O')

//-- Main code: Event-listener

//Hint: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

function getPositionFromClass(nodeClass){}

function addEventListener(){

}

//-- Main code: checker
// possible sepration: isEmptyPlace isAnyEmptyPlace isLineWin isAnyRowWin transposeTable isAnyColumnWin getDiagonals isAnyDiagonalWin
// check high https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
function isLineWin(matrix){

}

function isWon(){

}

function isGameOver(){

}

//-- Main code: Game //Invite the functions.
function actionOnEvent(nodeClass){}

//
