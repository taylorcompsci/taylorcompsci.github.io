const officerSlides = [
    ["assets/officers/nolan.png", "NOLAN YEE - PRESIDENT", "Hi, I'm Nolan Yee and I'm going to be the Computer Science Club President! I'm super excited for the year and am ready to contribute to all the fun things we do as a club."],
    ["assets/officers/jonathan.png", "JONATHAN CUMMINS - VICE PRESIDENT", "Hi, I'm Jonathan Cummins the new vice president for the computer science club. There's a-lot I'm hoping to do with the club in the coming year and I'm excited to work with the other officers to get that and more done!"],
    ["assets/officers/rizky.png", "RIZKY PRATAMA - SECRETARY", "Hey all, I'm Rizky Pratama, your returning secretary for the 2023-2024 school year. I look forward to improving the good things we got going over here."],
    ["assets/officers/cutie.png", "SHILOH OLOTU - TREASURER", "Hi, I'm Shiloh Olotu and I'm gonna be the Computer Science Club Treasurer during the 2023-2024 school year! Y'all can trust me to make sure very dollar is spent wisely and responsibly!"],
    ["assets/officers/iman.png", "IMAN AKHTAR - HISTORIAN", "Hi! I'm Iman Akhtar, and I'm gonna be historian of the Computer Science Club! I'm super excited to be apart of this team, and I can't wait to see how this year unravels!"],
    ["assets/officers/william.png", "WILLIAM DINH - OFFICER OF OUTREACH", "Hey I'm William Dinh and I'm gonna be the officer of outreach. I love my mom and the sound of keyboard switches. Definitely looking forward to being a part of this club."]
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