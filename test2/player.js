for (let i = 0; i < mazeHeight; i++) {
  for (let j = 0; j < mazeWidth; j++) {
    if (mazeLayout[i][j] === 2) {
      playerPosition = i * mazeWidth + j;
    }
  }
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
