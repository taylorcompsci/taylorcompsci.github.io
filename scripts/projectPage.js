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
                gridPiece.innerHTML = `<img src=${imageLink} loading="lazy">`;
    
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
//dynamically allocate tooltip
document.addEventListener("mouseenter", function (event) {
    if (!(event.target instanceof Element)) return; // Ensure it's an element

    let piece = event.target.closest(".gridPiece");
    if (!piece || piece.tooltipElement) return; // Avoid duplicate tooltips

    // Create tooltip
    let message = piece.getAttribute("data-message") || "No message";
    console.log("Tooltip triggered for:", piece);

    let tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = message;
    document.body.appendChild(tooltip);

    // Position tooltip
    let rect = piece.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
    tooltip.style.top = `${rect.top + window.scrollY - 30}px`;

    // Store reference for removal
    piece.tooltipElement = tooltip;

    // Show tooltip
    tooltip.style.opacity = "1";
}, true); // Capturing phase ensures it works for dynamically added elements

document.addEventListener("mouseleave", function (event) {
    if (!(event.target instanceof Element)) return; // Ensure it's an element

    let piece = event.target.closest(".gridPiece");
    if (!piece || !piece.tooltipElement) return;

    console.log("Removing tooltip for:", piece);
    piece.tooltipElement.remove(); // Remove tooltip
    piece.tooltipElement = null;  // Clear reference
    console.log("Tooltip removed");
}, true);