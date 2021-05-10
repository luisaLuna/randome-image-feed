const mainContainer = document.createElement('div');
const title = document.createElement('h1');
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 5;

document.body.append(title, mainContainer);

title.innerHTML = 'Random Image Feed';

mainContainer.classList.add('main-container');

addStyles()

for (let i = 0; i < rows * 3; i++) {
    let imgContainer = document.createElement('div');
    let img = document.createElement('img');
    img.src = `${unsplashURL}/${getRandomSize()}`;
    mainContainer.append(imgContainer);
    imgContainer.append(img);
    
    imgContainer.classList.add('img-container');
}

function getRandomSize() {
    return `${getRandomNum()}x${getRandomNum()}`;
}

function getRandomNum() {
    return Math.floor(Math.random() * 10) + 300;
}

function addStyles() {
    mainContainer.style.display = 'flex';
    mainContainer.style.flexWrap = 'wrap';
    mainContainer.style.alignItems = 'center';
    mainContainer.style.justifyContent = 'center';
    mainContainer.style.maxWidth = '1000px';
}