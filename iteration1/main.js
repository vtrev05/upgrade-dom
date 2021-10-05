/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". */

'use strict';
//1.1
const Show = document.querySelector('.showme')
console.log(Show)
console.log(Show.innerHTML)

//1.2
const h1 = document.querySelector('#pillado')
console.log(h1)
console.log(h1.innerHTML)


//1.3
const paragraphs = document.querySelectorAll('p');

for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].innerHTML)
    
}

//1.4

const pokemon = document.querySelectorAll('.pokemon')

for (let i = 0; i < pokemon.length; i++) {
    console.log(pokemon[i].innerHTML)
    
}

//1.5
const test = document.querySelectorAll("[data-function='testMe']")

for (let i = 0; i < test.length; i++) {
    console.log(test[i].innerHTML)
    
}

//1.6
console.log(test[2].innerHTML)