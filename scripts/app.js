function randomChoice(arr){
    const ind = Math.floor(Math.random() * arr.length);
    return arr[ind];
}

const SP = new ScrollParallax();

for(let i of document.getElementById("row1").children){
    let greenP = Math.random();
    let blueP = 1 - greenP;

    const green = [140,223,130];
    const blue = [98,168,239];

    let combo = [];
    combo.push(green[0] * greenP + blue[0] * blueP);
    combo.push(green[1] * greenP + blue[1] * blueP);
    combo.push(green[2] * greenP + blue[2] * blueP);

    const vshift = 15 * Math.random() * randomChoice([1,-1]);
    const hshift = 100 * Math.random() * randomChoice([1,-1]);

    i.style["box-shadow"] = `0 0 150px rgb(${combo[0]},${combo[1]},${combo[2]})`;
    i.style["margin-top"] = `${vshift}vh`;
    i.style["margin-left"] = `${hshift}px`;


    const intensity = Math.random();
    i.style["opacity"] = intensity + (1 - intensity)/2;
    SP.enable(i.id,intensity);
}

for(let i of document.getElementById("row2").children){
    let greenP = Math.random();
    let blueP = 1 - greenP;

    const green = [140,223,130];
    const blue = [98,168,239];

    let combo = [];
    combo.push(green[0] * greenP + blue[0] * blueP);
    combo.push(green[1] * greenP + blue[1] * blueP);
    combo.push(green[2] * greenP + blue[2] * blueP);

    const vshift = 15 * Math.random() * randomChoice([1,-1]);
    const hshift = 100 * Math.random() * randomChoice([1,-1]);

    i.style["box-shadow"] = `0 0 150px rgb(${combo[0]},${combo[1]},${combo[2]})`;
    i.style["margin-top"] = `${vshift}vh`;
    i.style["margin-left"] = `${hshift}px`;

    const intensity = Math.random();
    i.style["opacity"] = intensity + (1 - intensity)/2;
    SP.enable(i.id,intensity);

}