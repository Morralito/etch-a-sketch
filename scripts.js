const container = document.querySelector('.gridContainer');
let squareSize = parseInt(prompt('Enter canvas size: '));

for (let i = 0; i < squareSize**2; i++){
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('gridSquare');
    gridSquare.style.width = `${480/squareSize}px`;
    gridSquare.style.width = `${480/squareSize}px`;
    gridSquare.addEventListener('mouseover', (event) => event.target.style.backgroundColor = 'black');
    container.appendChild(gridSquare);
}

