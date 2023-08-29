function toggleBurger(){
    const burger = document.getElementById("burgerMenu");
    if(burger.style["opacity"] != 1){
        burger.style["opacity"] = 1;
        burger.style["pointer-events"] = "all";
    }
    else{
        burger.style["opacity"] = 0;
        burger.style["pointer-events"] = "none";
    }
}