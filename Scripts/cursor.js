//Brings some life in the custom cursor.
const cursor = document.querySelector('.cursor');
const cursorCircle = document.querySelector('.cursor-circle');
document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top: ' + (e.pageY - 4) + 'px; left: ' + (e.pageX - 4) + 'px;')
    cursorCircle.setAttribute('style', 'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;')
})

//Hides the custom cursor when leaving the window.
document.onmouseleave = function() {
    cursor.setAttribute('style', 'opacity: 0;')
    cursorCircle.setAttribute('style', 'opacity: 0; transition: 1ms;')
}