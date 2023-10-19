//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

// TO YELLOW
// const changeBgColor = () => {
//     document.querySelector('body').style.background = 'yellow';
// }


// RANDOM
const changeBgColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    console.log("🚀 ~ file: script.js:13 ~ changeBgColor ~ index:", index)
    document.body.style.background = colors[index];
}