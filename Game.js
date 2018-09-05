import Cell from './Cell';
import CellState from './CellState';

export default class Game {
  constructor(state) {
    this.numRows = state.length;
    this.numCols = state[0].length;
    this.state = state.map(row => row.map(cellState => new Cell(cellState)));
  }

  getCell(row, col) {
    return this.state[row][col];
  }

  getNumOfAliveNeighbors(row, col) {
    const stateValues = {
      [CellState.ALIVE]: 1,
      [CellState.DEAD]: 0,
    };

    let numNeighbors = 0;
    const startRow = row - 1 < 0 ? 0 : row - 1; // the row before the cell row or the first row
    const endRow = row + 1 >= this.numRows ? this.numRows - 1 : row + 1; // the row after the cell row or the last row
    const startCol = col - 1 < 0 ? 0 : col - 1; // the col before the cell col or the first col
    const endCol = col + 1 >= this.numCols ? this.numCols - 1 : col + 1; // the col after the cell col or the last col

    for (let i = startRow; i <= endRow; i++) { // loop through the cell neigbors including the current cell position
      for (let j = startCol; j <= endCol; j++) {
        if (!(i === row && j === col)) { // ignore the current cell
          numNeighbors += stateValues[this.state[i][j].state]; // increment the numNeighbors variable ie total number of adjacent neighbors
        }
      }
    }
    return numNeighbors;

    // const stateValues = {
    //   [CellState.ALIVE]: 1,
    //   [CellState.DEAD]: 0,
    // };

    // const cellAbove = (rowNum, colNum) => (
    //   (colNum === col - 1 && rowNum === row - 1)
    //   || (colNum === col && rowNum === row - 1)
    //   || (colNum === col + 1 && rowNum === row - 1)
    // );

    // const cellBelow = (rowNum, colNum) => (
    //   (colNum === col - 1 && rowNum === row + 1)
    //   || (colNum === col && rowNum === row + 1)
    //   || (colNum === col + 1 && rowNum === row + 1)
    // );

    // const cellNext = (rowNum, colNum) => (
    //   (colNum === col - 1 && rowNum === row)
    //   || (colNum === col + 1 && rowNum === row)
    // );

    // let numNeighbors = 0;

    // this.state.forEach((cellRow, rowNum) => {
    //   cellRow.forEach((cell, colNum) => {
    //     if (cellAbove(rowNum, colNum)
    //       || cellNext(rowNum, colNum)
    //       || cellBelow(rowNum, colNum)) {
    //       numNeighbors += stateValues[cell.state];
    //     }
    //   });
    // });

    // return numNeighbors;

    // const edgeCell = new Cell(CellState.DEAD);

    // const rowAbove = this.state[row - 1];

    // const topLeft = (row === 0 || col === 0) ? edgeCell : rowAbove[col - 1];
    // const top = row === 0 ? edgeCell : rowAbove[col];
    // const topRight = (row === 0 || col === this.numCols - 1) ? edgeCell : rowAbove[col + 1];

    // const rowBelow = this.state[row + 1];

    // const bottomLeft = (col === 0 || row === this.numRows - 1) ? edgeCell : rowBelow[col - 1];
    // const bottom = row === this.numRows - 1 ? edgeCell : rowBelow[col];
    // const bottomRight = (row === this.numRows - 1 || col === this.numCols - 1) ? edgeCell : rowBelow[col + 1];

    // const thisRow = this.state[row];

    // const left = col === 0 ? edgeCell : thisRow[col - 1];
    // const right = col === this.numCols - 1 ? edgeCell : thisRow[col + 1];

    // return [
    //   topLeft,
    //   top,
    //   topRight,
    //   left,
    //   right,
    //   bottomLeft,
    //   bottom,
    //   bottomRight,
    // ].reduce((sum, { state }) => sum + stateValues[state], 0);
  }

  nextState() {
    return this.state.map((row, rowNum) => row.map(
      (cell, colNum) => new Cell(
        cell.getNextState(this.getNumOfAliveNeighbors(rowNum, colNum)),
      ),
    ));
  }
}
