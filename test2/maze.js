const mazeWidth = 10;
const mazeHeight = 10;

const mazeLayout = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 3, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const maze = document.getElementById('maze');

for (let i = 0; i < mazeHeight; i++) {
  for (let j = 0; j < mazeWidth; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    // Use the mazeLayout array to set the cell as a wall or an open path
    if (mazeLayout[i][j] === 1) {
      cell.classList.add('wall');
    }

    maze.appendChild(cell);
  }
}

function checkWinCondition() {
  if (
    mazeLayout[Math.floor(playerPosition / mazeWidth)][
      playerPosition % mazeWidth
    ] === 3
  ) {
    alert('Congratulations! You won!');
  }
}
