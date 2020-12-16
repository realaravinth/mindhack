const D_DAY = 1610908200;

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
      }
      if (i == columns) {
        box.className += ' grid-box-final';
      }

      divContainer.appendChild(box);
    }
  }
};

const DAY_IN_SECONDS = 24 * 60 * 60;
const HOURS_IN_SECONDS = 60 * 60;
const MINUTES_IN_SECONDS = 60;

const timer = () => {
  let time = Math.floor(Date.now() / 1000);
  let timeDiff = D_DAY - time;

  let days = Math.floor(timeDiff / DAY_IN_SECONDS);
  let hours = Math.floor(timeDiff / HOURS_IN_SECONDS) % 24;
  let minutes = Math.floor(timeDiff / MINUTES_IN_SECONDS) % 60;
  let seconds = timeDiff % MINUTES_IN_SECONDS;

  //  console.log(`${days}:${hours}:${minutes}:${seconds}`);
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
};

drawGrid();

window.setInterval(() => timer(), 1000);
