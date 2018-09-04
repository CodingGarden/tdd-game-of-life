import Cell from './Cell'
import CellState from './CellState'

export default class Game {
  constructor(state) {
    this.numRows = state.length
    this.numCols = state[0].length
    this.state = state.map(row => row.map(cellState => new Cell(cellState)))
  }

  getCell(row, col) {
    return this.state[row][col]
  }

  getNumOfAliveNeighbors(row, col) {
    const stateValues = {
      [CellState.ALIVE]: 1,
      [CellState.DEAD]: 0,
    }

    let numNeighbors = 0
    let startRow = row - 1 < 0 ? 0 : row - 1 // the row before the cell row or the first row
    let endRow = row + 1 >= this.numRows ? this.numRows - 1 : row + 1 // the row after the cell row or the last row
    let startCol = col - 1 < 0 ? 0 : col - 1 // the col before the cell col or the first col
    let endCol = col + 1 >= this.numCols ? this.numCols - 1 : col + 1 // the col after the cell col or the last col

    for (let i = startRow; i <= endRow; i++) { // loop through the cell neigbors including the current cell position
      for (let j = startCol; j <= endCol; j++) {
        if (!(i === row && j === col)) { // ignore the current cell
          numNeighbors += stateValues[this.state[i][j].state] // increment the numNeighbors variable ie total number of adjacent neighbors
        }
      }
    }
    return numNeighbors
  }

  nextState() {
    return this.state.map((row, rowNum) =>
      row.map(
        (cell, colNum) =>
          new Cell(
            cell.getNextState(this.getNumOfAliveNeighbors(rowNum, colNum)),
          ),
      ),
    )
  }
}
