let map = [];
let tile1 = null, tile2 = null;

const loadMap = (rows = 4, cols =4) => {
    let maxTileValue = (rows * cols) / 2;
    let array = [];

    for (let i = 1; i <=maxTileValue; i++) {
        array.push(i, i);
    }
    array = shuffle(array);
    map = [];
    for (let row = 0; row < rows; row++) {
        map[row] = [];
        for (let col = 0; col < cols; col++) {
            map[row][col] = array.pop();
        }
    }
}

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const makeBoard = (rows = 4, cols = 4) => {
    let output = '<table>';
    for (let row = 0; row < rows; row++) {
        output += '<tr>';
        for (let col = 0; col < cols; col++) {
            output += '<td><button' +
            ' class="tile"' +
            ' id ="' + row + '_' + col + '"' +
            ' onclick="process(' + row + ',' + col + ')">' +
            '</button></td>';
        }
        output += '</tr>';
    }
    document.getElementById('gameBoard').innerHTML = output + '</table>';
}

const gameReset = () => {
    loadMap();
    makeBoard();
}

const process = (row, col) => {
    let clicked_tile = document.getElementById(row + '_' + col);
    if (!Boolean(clicked_tile.innerHTML)) {
    
        if (!tile1) {
            tile1 = clicked_tile;
            clicked_tile.innerHTML = map[row][col];
        }
        
        else if (!tile2) {
            tile2 = clicked_tile;
            clicked_tile.innerHTML = map[row][col];
    
            setTimeout (checkMatch, 325);
        }
    }
}

const checkMatch = () => {
    if (tile1.innerHTML == tile2.innerHTML) {
      tile1.hidden = true;
      tile2.hidden = true;
    }
    tile1.innerHTML = '';
    tile2.innerHTML = '';
    tile1 = tile2 = null;
  }
