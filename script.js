const grid = document.querySelector("#gridContainer");
grid.style.display = "flex";
grid.style.justifyContent = "space-around";
grid.style.flexDirection = "column";
grid.style.borderStyle = "solid";
grid.style.height = "90vh";
grid.style.width = "90vw";
grid.style.margin = "auto";

const gridElementSize = (90.0/16.0);
// Establish grid
for (let x = 0; x < 16; x++)
{
    let row = document.createElement("div");
    for (let y = 0; y < 16; y++)
    {
        let currentElement = document.createElement("div");
        currentElement.style.height = `${gridElementSize}vh`;
        currentElement.style.width = `${gridElementSize}vw`;
        row.appendChild(currentElement);
    }
    row.style.display = "flex";
    row.style.flexDirection = "row";
    grid.appendChild(row);
}