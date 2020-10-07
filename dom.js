let container = document.querySelector('#container');
let content = [];

function createGrid() {
    for(let i=0; i< (gridValue * gridValue); i++) {
        content[i] = document.createElement('div');
        content[i].classList.add(`content${i}`);
        content[i].setAttribute('style', 'width: 30px;height:30px;border:1px solid black;background:red;');
        container.appendChild(content[i]);
        content[i].addEventListener("mouseover", addHoverEffect);
    }
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${gridValue}, 30px)`;
}

function addHoverEffect() {
    this.style.background = "green";
}

// clear previous grid
function resetGrid() {
    let parent = document.getElementById('container');
    while(parent.firstChild) {
        parent.firstChild.remove();
    }
}

let gridValue;
let maxGridNum = 20;
function promptNumber() {
    gridValue = prompt(`Enter a numer between 1 and ${maxGridNum}`); 
    if(gridValue < 1 || gridValue > maxGridNum) {
        promptNumber();
    }
    resetGrid();
    createGrid();
    
}


promptNumber();
//let reset = document.getElementById('reset');
//reset.addEventListener('click', resetGrid());
