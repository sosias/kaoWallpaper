let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let colorBG = "#332d37";
let colorFG = "#eea014";

let texts = ["༼ つ ◉▿◉ ༽つ","(ﾉ◕ヮ◕)ﾉ","( ゜)ਊ゜)","٩꒰ʘʚʘ ꒱۶"]
let text = texts[3];

let fontSize = 173;

let offsets = {
    x: 0,
    y: 0
}


function renderKao(){
    ctx.font = fontSize + "px Roboto";

    ctx.fillStyle = colorBG;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let metrics = ctx.measureText(text);
    let fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    let actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    
    let textWidth = ctx.measureText(text).width;
    let textHeight = actualHeight;
    let posX = canvas.width/2 - textWidth/2 + offsets.x;
    let posY = canvas.height/2 + textHeight/3 + offsets.y;
    console.log(textWidth,canvas.width,posX);
    console.log(textHeight,canvas.height,posY);
    console.log(fontHeight,actualHeight);
    ctx.fillStyle = colorFG;
    ctx.fillText(text, posX, posY);
}

let canvasWidth = document.getElementById("canvasWidth");
canvasWidth.addEventListener("input", (e)=>{
    canvas.width = e.target.value;
    renderKao();
});

let canvasHeight = document.getElementById("canvasHeight");
canvasHeight.addEventListener("input", (e)=>{
    canvas.height = e.target.value;
    renderKao();
});

let textInput = document.getElementById("textInput");
textInput.addEventListener("input", (e)=>{
    text = e.target.value;
    renderKao();
});

let fontSizeInput = document.getElementById("fontSize");
fontSizeInput.addEventListener("input", (e)=>{
    fontSize = e.target.value;
    renderKao();
});

let colorBGInput = document.getElementById("colorBG");
colorBGInput.addEventListener("input", (e)=>{
    colorBG = e.target.value;
    renderKao();
});

let colorFGInput = document.getElementById("colorFG");
colorFGInput.addEventListener("input", (e)=>{
    colorFG = e.target.value;
    renderKao();
});

let offsetLx = document.getElementById("offsetLx");
offsetLx.addEventListener("click", ()=>{
    offsets.x--;
    renderKao();
});
let offsetRx = document.getElementById("offsetRx");
offsetRx.addEventListener("click", ()=>{
    offsets.x++;
    renderKao();
});
let offsetUp = document.getElementById("offsetUp");
offsetUp.addEventListener("click", ()=>{
    offsets.y--;
    renderKao();
});
let offsetDn = document.getElementById("offsetDn");
offsetDn.addEventListener("click", ()=>{
    offsets.y++;
    renderKao();
});


renderKao();