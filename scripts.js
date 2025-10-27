console.log("hello")
const board = document.querySelector(".board");


const width = 100
const resolution = width * width;

document.addEventListener("mousedown", () => drawing = true)
document.addEventListener("mouseup", () => drawing = false)



function draw(e) {
    console.log(e.currentTarget.className)
    if (drawing === true) {
    e.currentTarget.style.backgroundColor = "black"
    }
}

for (let i = 1; i<=resolution; i++) {
    pixel = document.createElement("div")
    pixel.setAttribute("class", "pixel");
    
    const pixelSize = `calc(600px / ${width} - 1px)`;
    pixel.style.flex = `0 0 ${pixelSize}`;

    board.appendChild(pixel)

    pixel.addEventListener("mouseover", draw)
}

