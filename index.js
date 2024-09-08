const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis,yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRhight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}
const blocks = [
    new Block(10,270)
]
function addBlock() {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = '100px'
    block.style.bottom = '50px'
    grid.appendChild(block)
}
addBlock()