

const def =     {
    img : "assets/officers/cutie.png",
    link : "https://github.com/taylorcompsci/taylorcompsci.github.io",
}



const projects = [
    def,def,def,def,def,def,def,def,    def,def,def,def,def,def,def,def,    def,def,def,def,def,def,def,def,    def,def,def,def,def,def,def,def,    def,def,def,def,def,def,def,def,
];

const side = Math.ceil(Math.pow(projects.length, 0.5));

const reload = ( link ) => {
    window.open(link, "_blank").focus();
    window.location.reload();
};

addEventListener("load", ()=>{
    const grid = document.querySelector(".grid");
    for(let row = 0; row < side; row++){
        
        let rowDiv = "<div class='gridRow'>";
        
        for(let col = 0; col < side; col++){
            let realIDX = (side*row)+col;
            if(realIDX >= projects.length)
                break;
            let project = projects[realIDX];
            console.log(project)
            rowDiv += `
        <div class="gridPiece" onclick="reload('${project.link}')">
                <img src="${project.img}"/>
        </div>
        `
        }
        grid.innerHTML+=rowDiv+"</div>";  
    }
});