var title, button1, button2, button3, button4, button;

var img1, img2, img3, img4;

var mom;

var bdaySong;

function preload(){

    img1 = loadImage("tile000.png");
    img2 = loadImage("tile001.png");
    img3 = loadImage("tile002.png");
    img4 = loadImage("tile003.png");
    bdaySong = loadSound("cutsong.mp3");

}
function setup(){
    createCanvas(1300,600);
    

    mom = createSprite(650,350);
    mom.visible = false;
   
    title = createElement("h1");
    button1=createButton("1");
    button2=createButton("2");
    button=createButton("back");
    button3=createButton("3");  
    button4=createButton("4");  


    title.style("color","#350b40");
    title.style("font-family","Georgia");
    title.style("font-size","60px");
    title.style("font-weight","bold");
    


    button.style("height","30px");
    button.style("width","60px");
    button.style("background-color","#03506f");
    button.style("border","none");
    button.style("color","#fff");
    button.style("border-radius","15px");
    button.style("cursor","pointer");
    button.style("outline","none");
//   outline:none;
//     background-color: #fea839; 
//   border: none;
//   color: #000;
//   font-weight:bold;
//   border-radius: 15px;
//   text-align: center;
//   font-size: 16px;
//   cursor: pointer;
//   outline:none;

button1.style("height","40px");
button1.style("width","40px");
button1.style("background-color","#03506f");
button1.style("border","none");
button1.style("color","#fff");
button1.style("border-radius","15px");
button1.style("cursor","pointer");


button2.style("height","40px");
button2.style("width","40px");
button2.style("background-color","#03506f");
button2.style("border","none");
button2.style("color","#fff");
button2.style("border-radius","15px");
button2.style("cursor","pointer");

button3.style("height","40px");
button3.style("width","40px");
button3.style("background-color","#03506f");
button3.style("border","none");
button3.style("color","#fff");
button3.style("border-radius","15px");
button3.style("cursor","pointer");


button4.style("height","40px");
button4.style("width","40px");
button4.style("background-color","#03506f");
button4.style("border","none");
button4.style("color","#fff");
button4.style("border-radius","15px");
button4.style("cursor","pointer");

    
    this.title.html("HAPPY BIRTHDAY MOM");
    this.title.position(250,0);
    this.button1.position(300,300);
    this.button2.position(500,300);
    this.button3.position(700,300);
    this.button4.position(900,300);
    this.button.hide();

    
    this.button1.mousePressed(()=>{
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button.show();
        this.button.position(20,20);
        
        bdaySong.stop();
            
         
        mom.visible = true;
        mom.addImage(img1);
        mom.scale = 2;
    });
    this.button2.mousePressed(()=>{
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button.show();
        
        bdaySong.stop();
            
         
        this.button.position(20,20);
        mom.visible = true;
        mom.addImage(img2);
        mom.scale = 2;
    });
    this.button3.mousePressed(()=>{
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button.show();
        this.button.position(20,20);
        mom.visible = true;
        
        bdaySong.stop();
            
         
        mom.addImage(img3);
        mom.scale = 2;
    });
    this.button4.mousePressed(()=>{
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button.show();
        this.button.position(20,20);
        mom.visible = true;
        
        bdaySong.stop();
            
         
        mom.addImage(img4);
        mom.scale = 2;
    });
    this.button.mousePressed(()=>{
        this.button.hide();
        this.button1.show();
        this.button2.show();
        this.button3.show();
        this.button4.show();
        mom.visible = false;
        
        bdaySong.play();
            
         
    })

    
    
}


function draw(){
    background("#ffe3de");

    
    drawSprites();
}