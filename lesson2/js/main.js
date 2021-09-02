"use strict";
import { printError } from './output.js';
import calcDateDiff from './calcDateDiff.js';

const form = document.getElementById('calcDate');

form.onsubmit = function (event) {
    event.preventDefault()

    const formData = new FormData(event.target);

    const dateFrom = formData.get('dateFrom');
    const dateTo = formData.get('dateTo');

    if (!dateFrom || !dateTo) {
        printError('Error')
        return
    }

    const dateDiff = calcDatesDiff(dateFrom, dateTo);
    printResult(datesDiff)
}



// const time = document.querySelector('.stopwatch')
// const mainButton = document.querySelector('#main-button')
// const clearButton = document.querySelector('#clear-button')
// const stopwatch = { elapsedTime: 0 }

// import { startStopwatch } from './stopwatch.js';
// import { displayTime } from './displayTime.js';
// import './audio.js';

// import { }



// // Adding Event Listiners to buttons

// mainButton.addEventListener('click', () => {
//     if (mainButton.innerHTML === 'Start') {
//         startStopwatch();
//         mainButton.innerHTML = 'Stop'
//     } else {
//         stopwatch.elapsedTime += Date.now() - stopwatch.startTime
//         clearInterval(stopwatch.intervalId)
//         mainButton.innerHTML = 'Start'
//     }
// })

// clearButton.addEventListener('click', () => {
//     stopwatch.elapsedTime = 0
//     stopwatch.startTime = Date.now()
//     displayTime(0, 0, 0, 0)
// })








