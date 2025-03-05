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

function clearGrid(container) {
  container.innerHTML = '';
}

function getGridSize(container) {
  const gridSize = prompt('Enter the grid size between 50 and 100:');

  if (gridSize === null) {
    return;
  }

  if (isNaN(gridSize)) {
    return alert('Please enter a valid number');
  }

  if (gridSize < 50 || gridSize > 100) {
    return alert('Please enter a grid size between 50 and 100');
  }

  return gridSize;
}

(() => {
  let gridSize = 25;

  const container = document.querySelector('.container');
  const btnContainer = document.querySelector('.btn-container');

  createGrid(gridSize, container);

  btnContainer.addEventListener('click', (event) => {
    const target = event.target;
    if (target.id === 'resize') { 
      const size = getGridSize(container);
      if (size) {
        gridSize = size;
        clearGrid(container);
        createGrid(gridSize, container);
      }
    }

    if (target.id === 'clear') {
      clearGrid(container);
      createGrid(gridSize, container);
    }
  });

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