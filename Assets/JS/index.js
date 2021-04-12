
/*jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", function(event) { 
   
console.log("Hello there");
console.log("General Kenobi!!!");


const memeBtn = document.getElementById('memeBtn')
const bg =[ "#ca44d4","#ffffff","#3d49f5","#d93838"]
const fg =[ "#ffffff","#ca44d4","#d93838","#3d49f5"]



function colorChange() {
    let limit=bg.length
    let index = Math.floor(Math.random()*limit);
    memeBtn.style.background =bg[index]
    memeBtn.style.color = fg[index]
    
}


let after =''

function fetchMemes(){
    colorChange();

    let parentDiv = document.createElement('div')
    parentDiv.id = 'memes'
    fetch('https://www.reddit.com/r/memes.json')
    .then(response => response.json())
    .then(body=>{
        
    })
}


});
