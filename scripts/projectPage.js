import data from "../assets/JSON/projects.js";

const def =     {
    img : "assets/officers/cutie.png",
    link : "https://github.com/taylorcompsci/taylorcompsci.github.io",
}

//seperating the script from the dataset refer to assets/JSON/projects.json
let projects = data();

const side = Math.ceil(Math.pow(projects.length, 0.5));

async function getProjectData(){
    await fetch("https://5xu2xfigc4.execute-api.us-east-1.amazonaws.com/deployment", {
        method: "GET",
        body : {"Action":"Access"},
        headers:{
            "Content-Type": "application/json"
        }
        
    }).then(response => {
        if(!response.ok)
            console.error("Error occured!");

        return response.data();
    }).then(data => {
        console.log(data.JSON);
    });
}



const reload = ( link ) => {
    console.log(link)
    window.open(link, "_blank").focus();
    window.location.reload();
};

addEventListener("load", ()=>{
    getProjectData();
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