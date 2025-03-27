const grid = document.querySelector("#gridContainer");
grid.style.display = "flex";
grid.style.justifyContent = "space-around";
grid.style.flexDirection = "column";
grid.style.borderStyle = "solid";
grid.style.height = "90vh";
grid.style.width = "90vw";
grid.style.margin = "auto";

const buildNewGridButton = document.querySelector("#buildNewGrid");
buildNewGridButton.style.width = "90vw";
buildNewGridButton.style.margin = "auto";
buildNewGridButton.textContent = "Build New Grid";
buildNewGridButton.addEventListener('click', () => {
    let requestedAmount = parseInt(prompt("Enter the grid size (Eg. Enter 16 for a 16x16 grid.)", "16"));
    buildGrid(requestedAmount);
});

function buildGrid(squaresPerDimension) {
    grid.innerHTML = '';
    squaresPerDimension = Math.min(squaresPerDimension, 100);
    squaresPerDimension = Math.max(1, squaresPerDimension);
    const gridElementSize = (90.0/squaresPerDimension);
    // Establish grid
    for (let x = 0; x < squaresPerDimension; x++)
    {
        let row = document.createElement("div");
        for (let y = 0; y < squaresPerDimension; y++)
        {
            let currentElement = document.createElement("div");
            currentElement.style.height = `${gridElementSize}vh`;
            currentElement.style.width = `${gridElementSize}vw`;
            currentElement.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "red";
            });
            row.appendChild(currentElement);
        }
        row.style.display = "flex";
        row.style.flexDirection = "row";
        grid.appendChild(row);
    }
}

buildGrid(16);
