import { expect } from 'chai';

import CellState from '../CellState';
import Cell from '../Cell';

describe('Cell', () => {
  it('Should be initialized with a cellState', () => {
    const aliveCell = new Cell(CellState.ALIVE);
    expect(aliveCell.state).to.equal(CellState.ALIVE);

    const deadCell = new Cell(CellState.DEAD);
    expect(deadCell.state).to.equal(CellState.DEAD);
  });

  it('Should throw an error if not initialized with a CellState', () => {
    expect(() => {
      const cell = new Cell(undefined);
    }).to.throw();
  });

  it('Should die if it has fewer than 2 live nieghbors', () => {
    const cell = new Cell(CellState.ALIVE);
    const nextStateWith0Neighbors = cell.getNextState(0);
    expect(nextStateWith0Neighbors).to.equal(CellState.DEAD);

    const nextStateWith1Neighbor = cell.getNextState(1);
    expect(nextStateWith1Neighbor).to.equal(CellState.DEAD);
  });

  it('Should stay dead if it has fewer than 2 live nieghbors', () => {
    const cell = new Cell(CellState.DEAD);
    const nextStateWith0Neighbors = cell.getNextState(0);
    expect(nextStateWith0Neighbors).to.equal(CellState.DEAD);

    const nextStateWith1Neighbor = cell.getNextState(1);
    expect(nextStateWith1Neighbor).to.equal(CellState.DEAD);
  });

  it('Should live with 2 or 3 live neighbors', () => {
    const cell = new Cell(CellState.ALIVE);
    const nextStateWith2Neighbors = cell.getNextState(2);
    expect(nextStateWith2Neighbors).to.equal(CellState.ALIVE);

    const nextStateWith3Neighbors = cell.getNextState(3);
    expect(nextStateWith3Neighbors).to.equal(CellState.ALIVE);

    // const expected = [
    //   [cell.getNextState(2), CellState.ALIVE],
    //   [cell.getNextState(3), CellState.ALIVE],
    // ];

    // expected.map(results => expect(results[0]).to.equal(results[1]));
  });

  it('Should die with more than 3 neighbors', () => {
    const cell = new Cell(CellState.ALIVE);
    const nextStateWith4Neighbors = cell.getNextState(4);
    expect(nextStateWith4Neighbors).to.equal(CellState.DEAD);

    const nextStateWith5Neighbors = cell.getNextState(5);
    expect(nextStateWith5Neighbors).to.equal(CellState.DEAD);
  });

  it('Should stay dead with more than 3 neighbors', () => {
    const cell = new Cell(CellState.DEAD);
    const nextStateWith4Neighbors = cell.getNextState(4);
    expect(nextStateWith4Neighbors).to.equal(CellState.DEAD);

    const nextStateWith5Neighbors = cell.getNextState(5);
    expect(nextStateWith5Neighbors).to.equal(CellState.DEAD);
  });

  it('Should come alive with exactly 3 neighbors', () => {
    const cell = new Cell(CellState.DEAD);
    const nextStateWith3Neighbors = cell.getNextState(3);
    expect(nextStateWith3Neighbors).to.equal(CellState.ALIVE);
  });

  // const testCases = [
  //   [[CellState.ALIVE, 0], CellState.DEAD],
  //   [[CellState.ALIVE, 1], CellState.DEAD],
  //   [[CellState.ALIVE, 2], CellState.ALIVE],
  //   [[CellState.ALIVE, 3], CellState.ALIVE],
  //   [[CellState.ALIVE, 4], CellState.DEAD],
  //   [[CellState.ALIVE, 5], CellState.DEAD],
  //   [[CellState.ALIVE, 6], CellState.DEAD],
  //   [[CellState.ALIVE, 7], CellState.DEAD],
  //   [[CellState.ALIVE, 8], CellState.DEAD],
  //   [[CellState.DEAD, 0], CellState.DEAD],
  //   [[CellState.DEAD, 1], CellState.DEAD],
  //   [[CellState.DEAD, 2], CellState.DEAD],
  //   [[CellState.DEAD, 3], CellState.ALIVE],
  //   [[CellState.DEAD, 4], CellState.DEAD],
  //   [[CellState.DEAD, 5], CellState.DEAD],
  //   [[CellState.DEAD, 6], CellState.DEAD],
  //   [[CellState.DEAD, 7], CellState.DEAD],
  //   [[CellState.DEAD, 8], CellState.DEAD],
  // ];
  // const cellStateNames = {
  //   [CellState.ALIVE]: 'CellState.ALIVE',
  //   [CellState.DEAD]: 'CellState.DEAD',
  // };
  // testCases.forEach(([[originalState, input], nextState]) => {
  //   it(`Should result in ${cellStateNames[nextState]} when currently ${cellStateNames[nextState]} with ${input} neighbours`, () => {
  //     const cell = new Cell(originalState);
  //     expect(cell.getNextState(input)).to.eq(nextState);
  //   });
  // });
});
