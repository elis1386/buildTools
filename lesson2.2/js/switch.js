import { clearParagraph, calcHTML, timerHTML } from "./output.js"
import { handleForm, diff } from "./calcDateDiff.js";
import listener from "./timer.js"
import bundlerPic from "../bundler.png"
import '../styles.css'
import chunk from 'lodash/chunk'

const pic = document.createElement('img')

pic.src = bundlerPic

pic.onload = () => {
    document.body.appendChild(pic)
}

document.querySelectorAll('.switchBtn').forEach(btn => {
    const outputBlock = document.querySelector('.service');
    btn.addEventListener('click', (event) => {
        if (event.target.dataset.id === '1') {
            outputBlock.innerHTML = `${calcHTML}`;
            handleForm();
            diff();
        }
        if (event.target.dataset.id === '2') {
            clearParagraph();
            outputBlock.innerHTML = `${timerHTML}`;
            listener();
        }
    });
});