let container = document.getElementById('qoute-container');
let qoute = document.getElementById('qoute-box');
let author = document.getElementById('qoute-author');
let twitter = document.getElementById('twitter');
let next = document.getElementById('next');

function getQuote(){
    let qouteitem = qoutes[Math.floor(Math.random() * qoutes.length)]
    qoute.textContent = qouteitem.text;
    if(!qouteitem.author){
        author.textContent = 'unknown'
    }else{
        author.textContent = qouteitem.author
    }

}

next.addEventListener('click',getQuote);