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