function main(){
    const colors = ["orange", "lightblue", "pink", "blueviolet", "crimson", "darkgreen", "floralwhite", "grey", "black"];
    for (i = 0; i < colors.length; i++){
        const colorDiv = document.createElement("div");
        colorDiv.classList.add("color");
        colorDiv.style.backgroundColor = colors[i];
        colorDiv.style.width = "30%";
        colorDiv.style.height = "10vh";
        colorDiv.style.marginTop = "5%";
        if (colors[i] == "black"){
            colorDiv.style.border = "1px solid white";
        } else {
            colorDiv.style.border = "1px solid black";
        }
        document.body.getElementsByClassName("colors")[0].appendChild(colorDiv);
    }

    let drawBoardWidth = document.getElementById("draw_board").clientWidth;
    let drawBoardHeight = document.getElementById("draw_board").clientHeight;
    const columns = Math.floor(drawBoardWidth / 21)
    const rows = Math.floor(drawBoardHeight / 31)
    for (i = 0; i < columns * rows; i++){
        let boardDiv = document.createElement("div");
        boardDiv.classList.add("pixel");
        boardDiv.style.backgroundColor = "white";
        boardDiv.style.width = "20px";
        boardDiv.style.height = "30px";
        document.getElementById("draw_board").appendChild(boardDiv);
    }

    let activeColor = "white";
    let pixels = document.querySelectorAll(".pixel");
    let mouseDown = false;
    pixels.forEach(pixel => {
        pixel.addEventListener("mousedown", function() {
            mouseDown = true;
            pixel.style.backgroundColor = activeColor;
        });
        pixel.addEventListener("mouseup", function() {
            mouseDown = false;
        });
        pixel.addEventListener("mouseenter", function() {
            if (mouseDown) {
                pixel.style.backgroundColor = activeColor;
            }
        });
    });

    let colorDivs = document.querySelectorAll(".color");
    colorDivs.forEach(color => {
        color.addEventListener("click", function() {
            activeColor = color.style.backgroundColor;
        });
    });

    const btn = document.body.getElementsByClassName("clear_btn")[0];
    btn.addEventListener("click", function() {
        pixels.forEach(pixel => {
            pixel.style.backgroundColor = "white";
        });
    });
}

window.onload = main