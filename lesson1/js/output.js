const paragraph = document.getElementById('output');

function printError(errorText) {
    if (paragraph === undefined) return
    else paragraph.innerHTML = errorText;
}

function clearParagraph() {
    paragraph.innerHTML = '';
}

const printResult = ({ years, months, days }) => {
    paragraph.innerHTML = `
        ${years} лет
        ${months} месяцев
        ${days} дней
    `;
}

let calcHTML = `<h2 class="text">Калькулятор дат</h2>
                <form id="calcDate">
                    <label for="dateFrom">
                        Первая дата:
                        <input type="date" name="dateFrom">
                    </label>
                    <label for="dateTo">
                        Вторая дата:
                        <input type="date" name="dateTo">
                    </label>
                    <button type="submit">Расчитать промежуток</button>
                </form>`;

let timerHTML = `<h2 class="text">Таймер</h2>
                 <div class="timer" style="float: left; margin-right: 10px;"></div>
                 <input type="text" name="time" class="time" placeholder="в секундах...">
                 <button class="start">Старт</button>
                 <button class="pause">Стоп</button>`;

export { printError, printResult, clearParagraph, calcHTML, timerHTML }