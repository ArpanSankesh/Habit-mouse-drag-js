let main = document.querySelector("#main");
let afterImg = document.querySelector(".after-background");
let arrows = document.querySelector(".arrows");

let move = (delts) => {
    afterImg.style.width = delts.clientX + 'px';
    // arrows.style.top = delts.clientY + 'px' ;
    // arrows.style.left = delts.clientX  + 'px' + -25 + 'px';
    console.log(delts.clientX);
}
main.addEventListener('mousemove', move)    