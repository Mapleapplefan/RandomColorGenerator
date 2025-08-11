
const button = document.querySelector('button');
button.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    h1.innerText = "rgb(${r}, ${g}, ${b})";
})