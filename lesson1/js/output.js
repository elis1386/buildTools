

const paragraph = document.getElementById('output');

export function printError(errorText) {
    paragraph.innerHTML = errorText;
}

export function clearParagraph() {
    paragraph.innerHTML = '';
}

export const printResult = ({ years, months, days }) => {
    paragraph.innerHTML = `
    year: ${years} 
    month:   ${months} 
    day:   ${days} 
    `;
}

