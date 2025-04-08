const titleDOM = document.querySelector('title');
const h1DOM = document.querySelector('h1');
const pDOM = document.querySelector('p');

const originalTitle = titleDOM.textContent;
const newTitle = 'Zuikio daržas';
let increment = 0;

h1DOM.textContent = newTitle;

const timer = setInterval(() => {
    titleDOM.textContent = increment++ % 2 === 0
        ? `${newTitle} (${increment})`
        : `${originalTitle} (${increment})`;

    // kaip sustabdyti esama laikrodi
    // if (increment >= 10) {
    //     clearInterval(timer);
    // }
}, 1000);

let pTime = 0;
setInterval(() => {
    pDOM.textContent = (pTime++ / 100) + 's';
    // pDOM.style.fontSize = (pTime / 10) + 'rem';
}, 10);

