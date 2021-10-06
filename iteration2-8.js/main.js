
//2.7
const childNode = document.querySelector('.remove')
const fatherNode = document.querySelector('.parent')
fatherNode.removeChild(childNode)

//NO FUNCIONA, SOLO ELIMINA 1

//2.8

let newPar = document.createElement('p').appendChild(document.createTextNode('voy en medio'))
let mySecondDiv = document.getElementById('secondDiv').getElementsByTagName('div')[0]
document.getElementById('secondDiv').insertBefore(newPar, mySecondDiv)


//2.9

function createFirstContent() {
    const insertHere = document.querySelector('.fn-insert-here')
    let newItem = document.createElement('p');
    let newContent = document.createTextNode(`voy dentro!`);
    newItem.appendChild(newContent);
    insertHere.appendChild(newItem)
}
function createSecondContent() {
    const insertHereNewP = document.querySelector('.fn')
    let newItem = document.createElement('p');
    let newContent = document.createTextNode(`voy dentro!`);
    newItem.appendChild(newContent);
    insertHereNewP.appendChild(newItem)
}
createFirstContent()
createSecondContent()