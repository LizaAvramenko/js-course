
function drawChess() {
    const mainBlock = document.querySelector('.main-block');
    let flag = true;
    let counter = 1;

    for (let i = 0; i<6; i++) {
        for (let j = 0; j<6; j++){
             
            let block = document.createElement('div');

            block.className = `block ${flag ? 'white' : 'black'}`;
            block.id = `${counter}`

            mainBlock.appendChild(block);
            flag = !flag;
            counter++
        }
        flag = !flag;
    }
}

drawChess()

const mainBlock = document.querySelector('.main-block')
const fishka = document.querySelector('#fishka1')
const defaultPositions = [1, 3, 5, 31, 33, 35]
const buttonDefault = document.getElementById('default')
const buttonRandom = document.getElementById('random')

function createFishka(array) {
    let counter = 1
    let insideText = 1
array.forEach((value) => {
    const newFishka = document.createElement('div')
    newFishka.draggable = true
    newFishka.id = `f${counter}`
    newFishka.classList.add('fishka')
    const text = document.createElement('span')
    
    text.classList.add('text')
    newFishka.append(text)

    if (counter > 3 ) {
        newFishka.classList.add('red') 
        text.innerText = `${insideText}`
        insideText++  
    }

    if (counter <= 3) {
        newFishka.classList.add('blue')
        text.innerText = `${counter}`
    }

    
    const borderCell = document.getElementById(`${value}`)
    borderCell.appendChild(newFishka)
    counter++
     
})
}
createFishka(defaultPositions)



mainBlock.addEventListener('dragover', allowDrag)
function allowDrag(event) {
event.preventDefault()
}

mainBlock.addEventListener('dragstart', drag)
function drag(event) {
    event.dataTransfer.setData('id', event.target.id)
}

mainBlock.addEventListener('drop', drop)
function drop(event) {
    const itemId = event.dataTransfer.getData('id')
    const fishka = document.getElementById(itemId)
    let isRed = fishka.classList.contains('red')
    const target = event.target.closest('.block')

    if (isRed && target.classList.contains('black')&&target.childNodes.length===0) {
       target.append(fishka)
    }

    if (!isRed && target.classList.contains('white')&&target.childNodes.length===0) {
       target.append(fishka)   
    }
   
// console.log(target.childNodes.length)

}

buttonDefault.addEventListener('click', setDefaultPositions)
buttonRandom.addEventListener('click', setRandomPositions)



function setDefaultPositions() {
const fishkaId = Array.from(document.querySelectorAll('.fishka')).map((element) => element.id).sort()
for (let i=0; i<fishkaId.length; i++) {
    const fishka = document.getElementById(`${fishkaId[i]}`)
    const borderCell = document.getElementById(`${defaultPositions[i]}`)
    borderCell.appendChild(fishka)
}

}

function setRandomPositions() {
    const randomPositions = []
    const whiteId = Array.from(document.querySelectorAll('.white')).map((element) => element.id)
    const blackId = Array.from(document.querySelectorAll('.black')).map((element) => element.id)
    const fishkaId = Array.from(document.querySelectorAll('.fishka')).map((element) => element.id).sort()
    console.log(whiteId, blackId) 

    for (let i=0; i<3; i++) {
        const randomIndex = getRandomValue(0, whiteId.length-1)
        randomPositions.push(whiteId[randomIndex])
        whiteId.splice(randomIndex, 1)
    }
    
    for (let i=0; i<3; i++) {
        const randomIndex = getRandomValue(0, blackId.length-1)
        randomPositions.push(blackId[randomIndex])
        blackId.splice(randomIndex, 1)
    }

    for (let i=0; i<fishkaId.length; i++) {
        const fishka = document.getElementById(`${fishkaId[i]}`)
        const borderCell = document.getElementById(`${randomPositions[i]}`)
        borderCell.appendChild(fishka)
    }
// console.log(fishkaId)
    
}

function getRandomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}