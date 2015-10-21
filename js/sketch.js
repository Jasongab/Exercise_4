var imgbg //mask
var imgBob;//spongebob
var font;


function preload() {
imgbg=loadImage('img/squidward.jpg');// squidward 
imgBob=loadImage('img/images-1.jpg');// spongebob
imgPic=loadImage('img/bikini_bottom.jpg'); // bikni bottom background    

font=loadFont('font/myfont.otf');
}




function setup() {
createCanvas(displayWidth,displayHeight);
image(imgPic,0,0,displayWidth,displayHeight); 
textSize(64);
textFont(font);

   
}

function draw(){
    image(imgbg);
    image(imgBob, mouseX, mouseY);
    
    
    var x1= random(0,displayWidth);//Gen Design P.294
    var y1=0;//Gen Design P.294
    
    var x2 = round(x1 + random(-7,7));//Gen Design P.294
    var y2 =round(random(-5,5));//Gen Design P.294
    
    var w = random(35,70)//Gen Design P.294
    var h = displayHeight; //Gen Design P.294
    
    copy(x1,y1,w,h, x2,y2,w,h);//Gen Design P.294
    
    if (mouseX<200 && mouseY<100){
       
        text('Smell ya later SpongeBob!',100,50);

}
}