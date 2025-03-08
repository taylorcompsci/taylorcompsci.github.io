function toggleBurger(){
    const icon = document.getElementById("menuIcon");
    const burger = document.getElementById("burgerMenu");
    if(burger.style["opacity"] != 1){
        burger.style["opacity"] = 1;
        burger.style["pointer-events"] = "all";
        icon.setAttribute("src","assets/svg/cancel.svg");
    }
    else{
        burger.style["opacity"] = 0;
        burger.style["pointer-events"] = "none";
        icon.setAttribute("src","assets/svg/menu.svg");
    }
}

const navbar = () => {

    return `        <div id="navbar">
            <a href="/" class="logo"><img src="assets/branding/logo-simple.png">THS <b>CS Club</b></a>

            <div id="sideLinks">
                <a href="faq">FAQ</a>
                <a href="resources">Resources</a>
                <a href="projectPage">Projects</a>
                <a href="uploads">Upload a project</a>
            </div>
        </div>

        <div id="mobileNavbar">
            <a class="logo" href="/">
                <img src="assets/branding/logo-simple.png">
            </a>

            <img id="menuIcon" style="width:40px" src="assets/svg/menu.svg">
        </div>

        <div id="burgerMenu">
            <a href="faq">FAQ</a>
            <a href="resources">Resources</a>
            <a href="projectPage">Projects</a>
            <a href="uploads">Upload a project</a>
            <br><br>
            <div class="appIcons">
                <a href="https://www.instagram.com/jetcompsci/"><img src="assets/link-icons/insta.png"></a>
                <a href="https://www.remind.com/join/thscsclub"><img src="assets/link-icons/remind.png"></a>
                <a href="https://github.com/taylorcompsci/taylorcompsci.github.io"><img src="assets/link-icons/github.png"></a>
                <a href="https://discord.gg/QZxb9ucG"><img src="assets/link-icons/discord.png"></a>
            </div>
        </div>`;
}




const body = document.querySelector("body");
body.innerHTML = navbar() + body.innerHTML;
addEventListener("load", ()=>{
    document.getElementById("menuIcon").addEventListener("click", toggleBurger);
});