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

let playerPosition = 2; // The player starts at position 1 (top-left corner)

document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'ArrowUp':
      moveUp();
      break;
    case 'ArrowDown':
      moveDown();
      break;
    case 'ArrowLeft':
      moveLeft();
      break;
    case 'ArrowRight':
      moveRight();
      break;
  }
});

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

function moveUp() {
  const targetPosition = playerPosition - mazeWidth;
  if (isValidMove(targetPosition)) {
    movePlayer(targetPosition);
  }
}

function moveDown() {
  const targetPosition = playerPosition + mazeWidth;
  if (isValidMove(targetPosition)) {
    movePlayer(targetPosition);
  }
}

function moveLeft() {
  const targetPosition = playerPosition - 1;
  if (isValidMove(targetPosition)) {
    movePlayer(targetPosition);
  }
}

function moveRight() {
  const targetPosition = playerPosition + 1;
  if (isValidMove(targetPosition)) {
    movePlayer(targetPosition);
  }
}

function isValidMove(targetPosition) {
  // Check if the target position is within the maze bounds and is not a wall
  return (
    targetPosition >= 0 &&
    targetPosition < mazeWidth * mazeHeight &&
    mazeLayout[Math.floor(targetPosition / mazeWidth)][
      targetPosition % mazeWidth
    ] !== 1
  );
}

function movePlayer(targetPosition) {
  // Move the player to the target position
  document
    .getElementsByClassName('cell')
    [playerPosition].classList.remove('player');
  playerPosition = targetPosition;
  document
    .getElementsByClassName('cell')
    [playerPosition].classList.add('player');

  // Check if the target position is the ending point (3)
  if (
    mazeLayout[Math.floor(targetPosition / mazeWidth)][
      targetPosition % mazeWidth
    ] === 3
  ) {
    alert('Congratulations! You won!');
  }
}

// Find the starting position (2) in the mazeLayout and set it as the player's initial position
for (let i = 0; i < mazeHeight; i++) {
  for (let j = 0; j < mazeWidth; j++) {
    if (mazeLayout[i][j] === 2) {
      playerPosition = i * mazeWidth + j;
    }
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
