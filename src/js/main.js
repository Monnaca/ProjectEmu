const winWitdh = window.innerWidth
const winHeight = window.innerHeight

document.addEventListener('DOMContentLoaded', function() {
    const animatedDiv = document.getElementById('animatedDiv')
    animatedDiv.addEventListener('animationend', function() {
        console.log('Animation ended');
    })
})