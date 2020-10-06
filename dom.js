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

function resetGrid() {
    
}

let gridValue = prompt("Enter a numer between 3 and 10");
createGrid();
let reset = document.getElementById('reset');

reset.addEventListener('click', resetGrid());

