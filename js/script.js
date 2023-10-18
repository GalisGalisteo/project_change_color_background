//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

// TO YELLOW
// const changeBgColor = () => {
//     document.querySelector('body').style.background = 'yellow';
// }


// RANDOM
const changeBgColor = () => {
    const index = Math.floor(Math.random() * 6);
    document.querySelector('body').style.background = colors[index];
}