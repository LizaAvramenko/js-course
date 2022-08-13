const box = document.querySelector('.box')
console.log (box)

box.addEventListener('mouseenter', addClass)
box.addEventListener('mouseleave', removeClass)

function addClass () {
    box.classList.add('active')
}

function removeClass() {
    box.classList.remove('active')
}