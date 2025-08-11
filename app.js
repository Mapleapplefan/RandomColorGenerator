
const button = document.querySelector('button');
const code= document.querySelector('#color-code');
button.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
    code.innerText = 'white';
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    code.innerText = `rgb (${r}, ${g}, ${b})`;
})