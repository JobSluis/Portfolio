//Moves the parralax images depending on mouse movement..
document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll('.parallax-item').forEach(item => {
        const speed = item.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX * speed)/100
        const y = (window.innerHeight - e.pageY * speed)/100
        item.style.transform = 'translateX('+x+'px) translateY('+y+'px)'
    });
}

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

//Slides open the contact form.
function openContactForm() {
    const formMenu = document.querySelector('.side-menu');
    formMenu.setAttribute('style', 'right: 0;')
}

//Closes the opened contact form.
function closeContactForm() {
    const formMenu = document.querySelector('.side-menu');
    formMenu.setAttribute('style', 'right: -100vw;')
}

function FadeContentOut() {
    const formMenu = document.querySelector('.content-selection');
    formMenu.setAttribute('style', 'opacity: 0;')
}