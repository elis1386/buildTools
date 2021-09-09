import { DateTime } from './luxon.js';
import { printError, printResult, calcHTML } from "./output.js";

export function handleForm() {
    const form = document.getElementById('calcDate');
    form.onsubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const dateFrom = formData.get('dateFrom');
        const dateTo = formData.get('dateTo');
        if (dateFrom === '' || dateTo === '') printError('Укажите оба значения дат!');
        else {
            const dateDiff = diff(dateFrom, dateTo);
            printResult(dateDiff);
        }
    }
}


export function diff(dateFromString, dateToString) {
    if (dateFromString < dateToString) [dateFromString, dateToString] = [dateToString, dateFromString];
    const dateFrom = DateTime.fromISO(dateFromString);
    const dateTo = DateTime.fromISO(dateToString);
    const diff = dateFrom.diff(dateTo, ['years', 'months', 'days']).toObject();
    return diff
}