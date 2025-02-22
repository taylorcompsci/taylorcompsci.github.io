const officerSlides = [
    ["assets/officers/nolan_yee.png", "NOLAN YEE - PRESIDENT", "Hi, I'm Nolan Yee and I'm going to be the Computer Science Club President! I'm super excited for the year and am ready to contribute to all the fun things we do as a club."],
    ["assets/officers/cutie.png", "SHILOU OLOTU - VICE PRESIDENT", "Hi, I'm Shiloh Olotu and I'm gonna be the Computer Science Club Treasurer during the 2023-2024 school year! Y'all can trust me to make sure the club runs smoothly!"],
    ["assets/officers/amukta_panchangam.png", "AMUKTA PANCHANGAM - SECRETARY", "Hi! I'm Amukta, your secretary for Computer Science Club. I look forward to contributing to the club's success and make this year enjoyable for everyone!"],
    ["assets/officers/michael_huang.png", "MICHAEL HUANG - TREASURER", "Hi everyone! My name's Michael and I'm so excited to be your CS Club Treasurer. I'm a rising junior and look forward to spending the next year with you all and meeting new people. Outside of this you can find me as apart of the school tennis team, playing piano, or hanging out with friends."],
    ["assets/officers/jisoo_yoon.png", "JISOO YOON - HISTORIAN", "Hi! I'm Jisoo and I'm looking forward to being the historian for CS club! We have many great things planned for this upcoming year, so be ready."],
    ["assets/officers/iman_akhtar.png", "IMAN AKHTAR - PARLIAMENTARIAN", "Hi! My name is Iman, and I am going to be Parliamentarian this year! I love spending time with friends, helping others, and I'm also working with Amukta to run a division of the club dedicated towards girls in computer science! I'm so excited to be a part of CS club next school year!"],
    ["assets/officers/william_dinh.png", "WILLIAM DINH - DIRECTOR OF OUTREACH", "Hey I'm William Dinh and I'm gonna be the director of outreach. I love my mom and the sound of keyboard switches. Definitely looking forward to being a part of this club."],
    ["assets/officers/vian_chen.png", "VIAN CHEN - DIRECTOR OF EDUCATION", "Nice to meet you! I'm Vian, the Director of Education. I teach others about Computer Science. I hope we can all learn something new this year."],
    ["assets/officers/nicholas_lovely.png", "NICHOLAS LOVELY - FRESHMEN REP", "nicholas "],
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