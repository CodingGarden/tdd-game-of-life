import CellState from './CellState';

/* eslint-disable class-methods-use-this */

export default class Cell {
  constructor(state) {
    if (Object.values(CellState).indexOf(state) === -1) {
      throw new Error('Invalid State');
    }
    this.state = state;
  }

  getNextState(numNeighbors) {
    if (this.state === CellState.ALIVE) {
      if (numNeighbors === 2 || numNeighbors === 3) {
        return this.state;
      }
    } else if (numNeighbors === 3) {
      return CellState.ALIVE;
    }
    return CellState.DEAD;
  }
}
