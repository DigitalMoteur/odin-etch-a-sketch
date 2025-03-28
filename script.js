const grid = document.querySelector("#gridContainer");
grid.style.display = "flex";
grid.style.justifyContent = "center";
grid.style.alignItems = "center";
grid.style.flexDirection = "column";
grid.style.borderStyle = "solid";
grid.style.margin = "auto";
grid.style.backgroundColor = "black";

const buildNewGridButton = document.querySelector("#buildNewGrid");
buildNewGridButton.style.width = "90vw";
buildNewGridButton.style.margin = "auto";
buildNewGridButton.textContent = "Build New Grid";
buildNewGridButton.addEventListener('click', () => {
    let requestedAmount = parseInt(prompt("Enter the grid size (Eg. Enter 16 for a 16x16 grid.)", "16"));
    buildGrid(requestedAmount);
});

function randomColorParam() {
    return Math.floor(Math.random() * 255);
}

function buildGrid(squaresPerDimension) {
    grid.innerHTML = '';
    squaresPerDimension = Math.min(squaresPerDimension, 100);
    squaresPerDimension = Math.max(1, squaresPerDimension);

    let dim = Math.min(window.innerWidth, window.innerHeight);
    grid.style.width = dim;
    grid.style.height = dim;
    const gridElementSize = (dim/squaresPerDimension) * 0.9;
    // Establish grid
    for (let x = 0; x < squaresPerDimension; x++)
    {
        let row = document.createElement("div");
        for (let y = 0; y < squaresPerDimension; y++)
        {
            let currentElement = document.createElement("div");
            currentElement.style.height = `${gridElementSize}px`;
            currentElement.style.width = `${gridElementSize}px`;
            currentElement.addEventListener("mouseover", (e) => {
                if (e.target.style.backgroundColor != "") {
                    if (e.target.style.opacity == '')
                    {
                        e.target.style.opacity = 0.9;
                    }
                    else if (e.target.style.opacity > 0.0)
                    {
                        e.target.style.opacity -= 0.1;
                    }
                }
                else {
                    e.target.style.backgroundColor = `rgb(${
                            randomColorParam()
                        },${
                            randomColorParam()
                        },${
                            randomColorParam()
                        })`;
                }
            });
            row.appendChild(currentElement);
        }
        row.style.display = "flex";
        row.style.flexDirection = "row";
        grid.appendChild(row);
    }
}

buildGrid(16);
