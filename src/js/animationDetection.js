function detectAnimationEnd(elementId, callback) {
    var element = document.getElementById(elementId);
    element.addEventListener('animationend', callback);
}

detectAnimationEnd('animatedDiv', function() {
    console.log('Animation ended');
});