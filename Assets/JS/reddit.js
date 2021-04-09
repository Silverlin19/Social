// const { response } = require("express");
document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
 
console.log("Hello there");
console.log("General Kenobi!!!");


const memeBtn = document.getElementById('memeBtn');

const bg =[ "#ca44d4","#ffffff","#3d49f5","#d93838"];
const fg =[ "#ffffff","#ca44d4","#d93838","#3d49f5"];



function colorChange() {
    let limit=bg.length;
    let index = Math.floor(Math.random()*limit);
    memeBtn.style.background =bg[index];
    memeBtn.style.color = fg[index];
    
}


let after ='';

function fetchMemes(){
    colorChange();

    let parentDiv = document.createElement('div');
    parentDiv.id = 'memes';
    // fetch('https://www.reddit.com/r/memes.json')
    // fetch('https://www.reddit.com/r/news.json')
    .then(response => response.json())
    .then(body=>{
        for (let index = 0; index < body.data.children.lenth; index++) {

            if (body.data.children[index].data.post_hint==='image') {
                
        let div= document.createElement('div');
        let h4= document.createElement('h4');
        let image= document.createElement('img');
        image.src=body.data.children[index].data.url_overridden_by_dest;
        h4.textContent=body.data.children[index].data.title;
        div.appendChild(h4);
        div.appendChild(image);
        parentDiv.appendChild(div);
            }

        }
        
        document.body.appendChild(parentDiv);
    }
  );
}

memeBtn.addEventListener("click",fetchMemes());

});