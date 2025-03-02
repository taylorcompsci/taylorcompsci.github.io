import data from "../assets/JSON/projects.js";

const def =     {
    img : "assets/officers/cutie.png",
    link : "https://github.com/taylorcompsci/taylorcompsci.github.io",
}

//seperating the script from the dataset refer to assets/JSON/projects.json
let projects = data();

const side = Math.ceil(Math.pow(projects.length, 0.5));

const reload = ( link ) => {
    console.log(link)
    window.open(link, "_blank").focus();
    window.location.reload();
};

addEventListener("load", ()=>{
    const grid = document.querySelector(".grid");
    for(let row = 0; row < side; row++){
        
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("gridRow");
        
        for(let col = 0; col < side; col++){
            let realIDX = (side*row)+col;
            if(realIDX >= projects.length)
                break;
            let project = projects[realIDX];
            
            const gridPiece = document.createElement("div");
            gridPiece.classList.add("gridPiece");
            
            gridPiece.innerHTML = `<img src=${project.img}>`;

            gridPiece.onclick = () => {reload(project.link)};

            rowDiv.appendChild(gridPiece)

        }
        grid.appendChild(rowDiv);  
    }
});