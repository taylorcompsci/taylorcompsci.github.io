import data from "../assets/JSON/projects.js";

const def =     {
    img : "assets/officers/cutie.png",
    link : "https://github.com/taylorcompsci/taylorcompsci.github.io",
}

//seperating the script from the dataset refer to assets/JSON/projects.json


async function getProjectData(){
    try{
    const projectData = await fetch("https://5xu2xfigc4.execute-api.us-east-1.amazonaws.com/deployment", {
        "method": "POST",
        body: JSON.stringify({"Action":"Access"})
        
    }).then(response => {
        if(!response.ok)
            console.log("Error occured!");

        return response.json();
    }).then(data => {
        const projects = JSON.parse(data).body;
        const side =  Math.ceil(Math.pow(projects.length, 0.5));
        console.log(projects);
        const grid = document.querySelector(".grid");
        for(let row = 0; row < side; row++){
            
            let rowDiv = document.createElement("div");
            rowDiv.classList.add("gridRow");
            
            for(let col = 0; col < side; col++){
                let realIDX = (side*row)+col;
                if(realIDX >= projects.length)
                    break;
                let project = projects[realIDX];
                console.log(project);
                const gridPiece = document.createElement("div");
                gridPiece.classList.add("gridPiece");
                gridPiece.setAttribute("data-message", project.Name)
                let imageLink = project.imageLink
                gridPiece.innerHTML = `<img src=${imageLink} loading=lazy>`;
    
                gridPiece.onclick = () => {reload(project.projectLink)};
    
                rowDiv.appendChild(gridPiece)
    
            }
            grid.appendChild(rowDiv);  
        }


    });
    

    }
    catch(error){
        console.log(error);
    }
}



const reload = ( link ) => {
    console.log(link)
    window.open(link, "_blank").focus();
    window.location.reload();
};

addEventListener("load", async function(){
    getProjectData();
});
//wait until js is loaded
setTimeout(() => {
    const gridPieces = document.querySelectorAll(".gridPiece");
    console.log(gridPieces.length)
    gridPieces.forEach(piece => {
        piece.addEventListener("mouseenter", function(event) {
            let message = piece.getAttribute("data-message");

            // Create tooltip
            let tooltip = document.createElement("div");
            tooltip.className = "tooltip";
            tooltip.textContent = message;
            document.body.appendChild(tooltip);
            console.log(tooltip);
            // Position tooltip
            let rect = piece.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
            tooltip.style.top = `${rect.top + window.scrollY - 30}px`;

            // Store tooltip reference for removal
            piece.tooltipElement = tooltip;
            tooltip.style.opacity = "1";
        });

         piece.addEventListener("mouseleave", function() {
             if (piece.tooltipElement) {
                 piece.tooltipElement.remove();
                 piece.tooltipElement = null;
             }
         });
    });
}, 500);
