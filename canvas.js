var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var colorBG = "#332d37";
var colorFG = "#eea014";

var texts = ["༼ つ ◉▿◉ ༽つ","(ﾉ◕ヮ◕)ﾉ","( ゜)ਊ゜)","٩꒰ʘʚʘ ꒱۶"]

var text = texts[3];

let offsets = {
    x: 0,
    y: 0
}


function renderKao(){
    ctx.font = "173px Roboto";

    ctx.fillStyle = colorBG;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let metrics = ctx.measureText(text);
    let fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    let actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    
    var textWidth = ctx.measureText(text).width;
    var textHeight = actualHeight;
    var posX = canvas.width/2 - textWidth/2 + offsets.x;
    var posY = canvas.height/2 + offsets.y; // + textHeight/2;
    console.log(textWidth,canvas.width,posX);
    console.log(textHeight,canvas.height,posY);
    console.log(fontHeight,actualHeight);
    ctx.fillStyle = colorFG;
    ctx.fillText(text, posX, posY);
}

var canvasWidth = document.getElementById("canvasWidth");
canvasWidth.addEventListener("input", (e)=>{
    canvas.width = e.target.value;
    renderKao();
});

var canvasHeight = document.getElementById("canvasHeight");
canvasHeight.addEventListener("input", (e)=>{
    canvas.height = e.target.value;
    renderKao();
});

var textInput = document.getElementById("textInput");
textInput.addEventListener("input", (e)=>{
    text = e.target.value;
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

var offsetLx = document.getElementById("offsetLx");
offsetLx.addEventListener("click", ()=>{
    offsets.x--;
    renderKao();
});
var offsetRx = document.getElementById("offsetRx");
offsetRx.addEventListener("click", ()=>{
    offsets.x++;
    renderKao();
});
var offsetUp = document.getElementById("offsetUp");
offsetUp.addEventListener("click", ()=>{
    offsets.y--;
    renderKao();
});
var offsetDn = document.getElementById("offsetDn");
offsetDn.addEventListener("click", ()=>{
    offsets.y++;
    renderKao();
});


renderKao();