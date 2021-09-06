export default function listener() {
    let timerInput = document.querySelector(".time");
    let buttonRun = document.querySelector(".start");
    let timerShow = document.querySelector(".timer");
    let buttonPause = document.querySelector(".pause");
    let pause = false;
    let counter = 0;
    buttonPause.addEventListener('click', () => {
        pause = !pause;
        if (pause) buttonPause.innerHTML = 'Стоп'; counter += 1;
        if (!pause) counter -= 1; buttonPause.innerHTML = 'Продолжить';
    });
    buttonRun.addEventListener('click', function () {
        let time = parseInt(timerInput.value);
        counter = time;
        let timer = setInterval(function () {
            let seconds = counter;
            if (counter <= 0) {
                let sound = new Howl({
                    src: ['alarm.mp3']
                });
                sound.play();
                clearInterval(timer);
                timerShow.innerHTML = '';
            } else {
                let strTimer = `${seconds}`;
                timerShow.innerHTML = strTimer;
            }
            if (!pause) --counter;
        }, 1000)
    });
}