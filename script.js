'use strict';

// console.log(document.body.scrollHeight);
// console.log(window.innerHeight);

let scrollLine = document.querySelector('.scroll-line');
let fullHeight = document.body.scrollHeight - window.innerHeight;
console.log(fullHeight);

window.addEventListener('scroll', function(){
    let scr = pageYOffset;
    // console.log(scr);
    let progress = (scr / fullHeight) * 100;
    scrollLine.style.width = `${progress}%`;
    
})