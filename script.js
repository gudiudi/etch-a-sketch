function createGrid(gridSize) {
  const containerSize = 700;
  const cellSize = containerSize / gridSize;
  
  const container = document.querySelector('.container');
  container.style.width = `${containerSize}px`;
  container.style.height = `${containerSize}px`;

  for (let j = 0; j < (gridSize * gridSize); j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    container.append(cell);
  }
}

createGrid(5);