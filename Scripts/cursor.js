//Script for the cursor.
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top: ' + (e.pageY - 4) + 'px; left: ' + (e.pageX - 4) + 'px;')
})

//Script for the outer cursor circle.
const cursorCircle = document.querySelector('.cursor-circle');
document.addEventListener('mousemove', e => {
    cursorCircle.setAttribute('style', 'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;')
})