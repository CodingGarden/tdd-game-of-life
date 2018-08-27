import { expect } from 'chai';

import CellState from '../CellState';

describe('CellState', () => {
  it('Should have a ALIVE state', () => {
    expect(CellState.ALIVE).to.equal(1);
  });
  it('Should have a DEAD state', () => {
    expect(CellState.DEAD).to.equal(0);
  });
});
