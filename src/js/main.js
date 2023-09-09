document.addEventListener('DOMContentLoaded', function() {
    var animatedDiv = document.getElementById('animatedDiv');
    animatedDiv.addEventListener('animationend', function() {
        console.log('Animation ended');
    });
});