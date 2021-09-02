'use strict';

export let soundButton = document.getElementById('main-button');
soundButton.addEventListener('click', function () {
    document.getElementById('sound').play()
    document.getElementById('sound').stop()

})


