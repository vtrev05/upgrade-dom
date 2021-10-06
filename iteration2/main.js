'use strict'

//ITERATION 2

//2.1

const insert = document.querySelector('.fn-insert-there')
insert.innerHTML = "<div></div>"

//2.2

document.body.innerHTML += ` <div class="hereIAm"><p>Hola</p></div>`

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
moreCreation.innerHTML = "<div><p>Soy dinámico</p></div>"

//2.5

const anotherDiv = document.querySelector('.fn-insert-here')
anotherDiv.innerHTML = "<p>Wubba Lubba dub dub</p>"

//2.6

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.querySelector('.ul')

function bucle() {
    for (let i = 0; i < apps.length; i++) {
        let newItem2 = document.createElement('li');
        let newContent2 = document.createTextNode(`${apps[i]}`);
        newItem2.appendChild(newContent2);
        ul.appendChild(newItem2)
        
    }
}
bucle()




