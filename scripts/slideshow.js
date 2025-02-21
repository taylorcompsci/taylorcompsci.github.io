const officerSlides = [
    ["assets/officers/nolan_yee.png", "NOLAN YEE - PRESIDENT", "Hi, I'm Nolan Yee and I'm going to be the Computer Science Club President! I'm super excited for the year and am ready to contribute to all the fun things we do as a club."],
    ["assets/officers/cutie.png", "SHILOU OLOTU - VICE PRESIDENT", "Hi, I'm Shiloh Olotu and I'm gonna be the Computer Science Club Treasurer during the 2023-2024 school year! Y'all can trust me to make sure the club runs smoothly!"],
    ["assets/officers/amukta_panchangam.png", "AMUKTA PANCHANGAM - SECRETARY", ""],
    ["assets/officers/michael_huang.png", "MICHAEL HUANG - TREASURER", ""],
    ["assets/officers/jisoo_yoon.png", "JISOO YOON - HISTORIAN", ""],
    ["assets/officers/iman_akhtar.png", "IMAN AKHTAR - PARLIAMENTARIAN", "Hi! I'm Iman Akhtar, and I'm gonna be parliamentarian of the Computer Science Club! I'm super excited to be apart of this team, and I can't wait to see how this year unravels!"],
    ["assets/officers/william_dinh.png", "WILLIAM DINH - DIRECTOR OF OUTREACH", "Hey I'm William Dinh and I'm gonna be the director of outreach. I love my mom and the sound of keyboard switches. Definitely looking forward to being a part of this club."],
    ["assets/officers/vian_chen.png", "VIAN CHEN - DIRECTOR OF EDUCATION", ""],
    ["assets/officers/nicholas_lovely.png", "NICHOLAS LOVELY - FRESHMEN REP", ""],
];

let cur = 0;
function displaySlide(ind){
    let slideButtons = "";
    for(let i = 0; i < officerSlides.length; i++){
        if(i != ind){
            slideButtons += `<div class='slideButton' onclick='displaySlide(${i})'></div>`;
        }
        else{
            slideButtons += `<div class='slideButton currentSlide' onclick='displaySlide(${i})'></div>`;
        }
    }

    document.getElementById("officerSlide").innerHTML = `
        <img src="${officerSlides[ind][0]}">
        <h3>${officerSlides[ind][1]}</h3>
        <p>${officerSlides[ind][2]}</p>  
        <div id="slideButtonHolder">${slideButtons}</div>  
    `
}

displaySlide(0);