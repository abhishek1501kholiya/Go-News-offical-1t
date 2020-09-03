var canvas;
var back;
function setup(){
//canvas = createCanvas(windowWidth,windowHeight)
back = createButton('Back');
}
function draw(){
back.position(100,600);
back.mousePressed(()=>{
	window.location.href = "index.html";
})
}