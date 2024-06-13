let mainBg = document.querySelector(".before-background");
let afterImg = document.querySelector(".after-background");
let arrows = document.querySelector(".arrows");

let move = (delts) => {
    afterImg.style.width = delts.clientX + 'px';
    // arrows.style.top = delts.clientY + 'px' ;
    // arrows.style.left = delts.clientX  + 'px' + -25 + 'px';
}
mainBg.addEventListener('mousemove', move)    