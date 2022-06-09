
const gridContainer = document.querySelector('#grid-container');
let currentGridSize = 30;

function createGrid(gridSize){
    let grid = document.createElement('div');
    grid.classList.add('grid');
    
    for(let i = 0;i<gridSize; i++){
        let row = document.createElement('div');
        row.className = "gridRow";
        for(let j = 0; j<gridSize;j++){
            // grid.innerHTML += '<div class="gridSquare">' + 'test⠀' + '</div>';
            let cell = document.createElement('div');
            cell.className = "gridSquare";
            cell.innerText = "⠀";
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
    gridContainer.appendChild(grid);

    let gridSquaresNodeList = document.querySelectorAll(".gridSquare");
    // console.log(gridSquaresNodeList)
    gridSquaresNodeList.forEach(item => item.addEventListener('mouseover', event => {
        event.target.style['background-color'] = "purple";
    }));
}

function deleteGrid(){
    const grid = document.querySelector('.grid');
    grid.remove()

}

function clearGrid(){
    deleteGrid();
    createGrid(currentGridSize);
}

createGrid(currentGridSize);

// let gridSquaresNodeList = document.querySelectorAll(".gridSquare");
// // console.log(gridSquaresNodeList)
// gridSquaresNodeList.forEach(item => item.addEventListener('mouseover', event => {
//     event.target.style['background-color'] = "purple";
// }));



let clearButton = document.querySelector("#clear-button");
clearButton.addEventListener('click', clearGrid);


let twentyGridButton = document.querySelector("#twenty-button");
twentyGridButton.addEventListener('click', () => {
    deleteGrid();
    currentGridSize = 20;
    createGrid(currentGridSize);
});



let thirtyGridButton = document.querySelector("#thirty-button");
thirtyGridButton.addEventListener('click', () => {
    deleteGrid();
    currentGridSize = 30;
    createGrid(currentGridSize);
});

let fourtyGridButton = document.querySelector("#fourty-button");
fourtyGridButton.addEventListener('click', () => {
    deleteGrid();
    currentGridSize = 40;
    createGrid(currentGridSize);
});