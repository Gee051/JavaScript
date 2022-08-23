const board = document.querySelector('#board')
const pieceIndexes = []
const correctPieceOrder = []


function createTile(index) {
    const tile = document.createElement('div')
    tile.classList.add('tile')
    tile.ondragover = function (evt) {
        evt.preventDefault()
    }
    tile.ondrop = function (evt) {
        evt.stopPropagation()

        if(!tile.hasChildNodes()) {
            let id = evt.dataTransfer.getData('text/plain')
            tile.appendChild(document.getElementById(id))
        }

        if(checkIfCorrect()) {
            alert('Excellent Work. \nYou have completed the puzzle')
        }
    }

    tile.dataset.index = index
    return tile
}


function createPiece (arr) {
    let randomPiece = range()
    const piece = document.createElement('div')
    piece.classList.add('piece')
    piece.textContent = randomPiece
    piece.id = `piece${randomPiece}`
    piece.draggable = true
    piece.ondragstart = function (evt) {
        evt.dataTransfer.setData('text/plain', piece.id)
    
    }

    return piece
}


function checkIfCorrect () {
    let correctnessArray = []


    
    const allPiece = document.querySelectorAll('.piece')
    allPiece.forEach((piece, index) => {
        if(Number(piece.textContent) === correctPieceOrder[index]) {
            correctnessArray.push(true)
        }else {
            correctnessArray.push(false)
        }
    })

    let isCorrect = correctnessArray.every(value => value === true)
    return isCorrect
    

}
// fill the board with tiles
for (let index= 0; index < 12; index++) {
    board.appendChild(createTile(index))
}

// Populate the piece index Array
for (let index= 1; index <=11; index++){
    pieceIndexes.push(index)
}

const tiles = document.querySelectorAll('.tile')
tiles.forEach((tiles ,index) => {
    if(index >  0) {
    tiles.appendChild(createPiece(pieceIndexes))
    }
})




