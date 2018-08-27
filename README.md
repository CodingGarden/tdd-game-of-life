# TDD - Game of Life

* [x] Install dependencies
  * [x] mocha chai @babel/core @babel/preset-env @babel/register
* [x] Setup Babel
  * [x] { "presets": ["@babel/preset-env"] }
* [x] Setup test directory
* [x] Add test script
  * [x] "test": "mocha --require @babel/register"
* CellState
  * [x] Has an ALIVE state
  * [x] Has a DEAD state
* Cell
  * [x] Should be initialized with a cellState
  * [x] Should die if it has fewer than 2 live nieghbors
    * [x] getNextState(numNeighbors)
  * [x] Should live with 2 or 3 live neighbors
  * [x] Should die with more than 3 neighbors
  * [x] Should come alive with exactly 3 neighbors
* Game
  * [x] Should be initialized with a given state
    * [x] Array of arrays of states
  * [x] Should retrieve a cell at a given row and column
  * [x] Should get the number of alive neighbors for a given cell
  * [x] Should create the next state of the game

## TODO

* [ ] Game set game state
* [ ] Cell set state