'use strict'

//ITERATION 2

//2.1

const insert = document.querySelector('.fn-insert-there')
insert.innerHTML = "<div>Tema 1</div>"

//2.2

const insertTwo = document.querySelector('.here')
insertTwo.innerHTML = "<div><p>Hola</p></div>"

//2.3

const newDivThere = document.querySelector('.there')

for (let i = 0; i < 6; i++) {
    let newItem = document.createElement('p');
    let newContent = document.createTextNode(`hola`);
    newItem.appendChild(newContent);
    newDivThere.appendChild(newItem)
    
}

//2.4

const moreCreation = document.querySelector('.moreContent')
insertTwo.innerHTML = "<div><p>Soy dinámico</p></div>"

//2.5

const anotherDiv = document.querySelector('.fn-insert-here')
anotherDiv.innerHTML = "<p>Wubba Lubba dub dub</p>"

//2.6

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.querySelector('.ul')

function bucle() {
    for (let i = 0; i < apps.length; i++) {
        let newItem = document.createElement('li');
        let newContent = document.createTextNode(`${apps[i]}`);
        newItem.appendChild(newContent);
        ul.appendChild(newItem)
        
    }
}
bucle()

//2.7
const remove = document.querySelector('.remove')
remove.parentNode.removeChild(remove)

//2.8

//2.9
