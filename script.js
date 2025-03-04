function createGrid(gridSize, container) {
  const containerSize = 700;
  const cellSize = containerSize / gridSize;
  
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

(() => {
  const container = document.querySelector('.container');
  createGrid(25, container);

  // Disable built-in drag and drop (🚫) behavior
  document.addEventListener("dragstart", (event) => event.preventDefault());

  let isDrawingMode = false;

  container.addEventListener('mousedown', (event) => {
    const target = event.target;
    if (target.classList.contains('cell')) {
      isDrawingMode = true;
      target.style.backgroundColor = 'blue';
    }
  });

  container.addEventListener('mousemove', (event) => {
    const target = event.target;
    if (target.classList.contains('cell') && isDrawingMode) {
      target.style.backgroundColor = 'blue';
    }
  });

  document.addEventListener('mouseup', () => (isDrawingMode = false));
})();




