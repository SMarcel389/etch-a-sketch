console.log("hello")
const board = document.querySelector(".board");

const canvasSize = document.querySelector("#pixels")
let width = Number(canvasSize.value)
let resolution = width * width;

const color = document.querySelector(".color")
let currentColor = color.value || "#000000"
color.addEventListener("input", changeColor)

let drawing = false
document.addEventListener("mousedown", () => drawing = true)
document.addEventListener("mouseup", () => drawing = false)

createBoard()

const resetBtn = document.querySelector(".resetBtn")
resetBtn.addEventListener("click", resetBoard)

canvasSize.addEventListener("input", updateCanvasSize)





function draw(e) {
    console.log(e.currentTarget.className)
    if (drawing === true) {
    e.currentTarget.style.backgroundColor = currentColor
    }
}

function changeColor(e) {
    currentColor = e.target.value

}

function createBoard() {
    for (let i = 1; i<=resolution; i++) {
        const pixel = document.createElement("div")
        pixel.setAttribute("class", "pixel");
        
        const pixelSize = `calc(600px / ${width} - 1px)`;
        pixel.style.flex = `0 0 ${pixelSize}`;
        

        board.appendChild(pixel)

        pixel.addEventListener("mouseover", draw)
    }
}

function resetBoard() {
    board.replaceChildren();
    createBoard()
}

function updateCanvasSize() {
    width = Number(canvasSize.value)
    resolution = width * width

    const currentRange = document.querySelector(".currentRange")
    currentRange.textContent = width + " " + "pixels"
    resetBoard()
}


