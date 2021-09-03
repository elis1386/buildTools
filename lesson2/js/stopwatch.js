'usr strict';
// Creating our stopwatch function

export function startStopwatch() {
    //reset start time
    stopwatch.startTime = Date.now();
    // run `setInterval()` and save the ID
    stopwatch.intervalId = setInterval(() => {
        //calculate elapsed time
        const elapsedTime = Date.now() - stopwatch.startTime + stopwatch.elapsedTime
        //calculate different time measurements based on elapsed time
        const milliseconds = parseInt((elapsedTime % 1000) / 10)
        const seconds = parseInt((elapsedTime / 1000) % 60)
        const minutes = parseInt((elapsedTime / (1000 * 60)) % 60)
        const hour = parseInt((elapsedTime / (1000 * 60 * 60)) % 24);
        displayTime(hour, minutes, seconds, milliseconds)
    }, 100);
}
