const drawGrid = () => {
  let divContainer = document.getElementById('grid');
  let columns = 26;
  let rows = 13;

  for (let i = 1; i <= columns; i++) {
    for (let j = 1; j <= rows; j++) {
      let box = document.createElement('div');

      box.id = `grid-box-${i}`;
      box.className = 'grid-box';
      box.style = `grid-column:${i}; grid-row: ${j};`;
      if (i == 1) {
        box.className += ' grid-box-initial';
      };
      if (i == columns) {
        box.className += ' grid-box-final';
      };

      divContainer.appendChild(box);
    }
  }
}

drawGrid();
