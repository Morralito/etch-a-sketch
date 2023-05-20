const gridContainer = document.querySelector('.gridContainer');
const sliderValue = document.getElementById('gridNumber');
const valueOuput = document.getElementById('currentValue');
const selectColors = document.getElementById('selectColors');
createGrid(16);



sliderValue.addEventListener('input', function(event) {
    const squareSize = parseInt(event.target.value);
    valueOuput.textContent = squareSize + ' X ' + squareSize;
    removeChilds(gridContainer);
    createGrid(squareSize);
});

function createGrid(squareSize){

    for (let i = 0; i < squareSize**2; i++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.style.width = `${650/squareSize}px`;
        gridSquare.style.width = `${650/squareSize}px`;

        event.target.style.backgroundColor = `${colorSelected}`;
        event.target.style.outline = '1px solid ' + colorSelected;
        gridContainer.appendChild(gridSquare);
    }
}

function removeChilds(node) {
    let last;
    while (last = node.lastChild) node.removeChild(last);
};

