"use strict";



const time = document.querySelector('.stopwatch')
const mainButton = document.querySelector('#main-button')
const clearButton = document.querySelector('#clear-button')
const stopwatch = { elapsedTime: 0 }

import { displayTime } from './displayTime.js';
import { startStopwatch } from './stopwatch.js';


// Adding Event Listiners to buttons

mainButton.addEventListener('click', () => {
    if (mainButton.innerHTML === 'Start') {
        startStopwatch();
        mainButton.innerHTML = 'Stop'
    } else {
        stopwatch.elapsedTime += Date.now() - stopwatch.startTime
        clearInterval(stopwatch.intervalId)
        mainButton.innerHTML = 'Start'
    }
})

clearButton.addEventListener('click', () => {
    stopwatch.elapsedTime = 0
    stopwatch.startTime = Date.now()
    displayTime(0, 0, 0, 0)
})

let soundButton = document.getElementById('main-button');
soundButton.addEventListener('click', function () {
    document.getElementById('sound').play()
})







