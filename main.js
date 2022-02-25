canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

Array_lorenza_con_su_baile_de_culito_censual=["imagen1.jpg","imagen2.jpg", "imagen3.jpg","imagen4.jpg"];
random_Number=Math.floor(Math.random()*4);
background_image =Array_lorenza_con_su_baile_de_culito_censual[random_Number];
rover_image = "curiosity.png";


function add() {
fondo=new Image();
fondo.src=background_image;
fondo.onload=uploadBackground;
rover=new Image();
rover.src=rover_image;
rover.onload=uploadrover;

}

function uploadBackground() {
 ctx.drawImage(fondo,0,0,canvas.width,canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover,rover_x,rover_y,rover.width,rover.height);    
}


window.addEventListener("keydown",my_keydown); //cuando se presione alguna tecla, el evento keydown ocurrirá y llamará a la función my_keydown

function my_keydown(e){
 tecla=e.keyCode;
if(tecla=="38"){
up();
}
if(tecla=="40"){
 down();
}
if(tecla=="37"){
left();
}
if(tecla=="39"){
 right();
}
}

function up(){
    if(rover_y >=0)
    {
rover_y=rover_y-10;
uploadBackground();
uploadrover();
    }
}
function down(){
if(rover_y <=500)
{
rover_y=rover_y+10;
uploadBackground();
uploadrover();
    }
}
function left(){
 if(rover_x >=0)
 {
rover_x=rover_x-10;
uploadBackground();
uploadrover();
    }  
}
function right(){
 if(rover_x <=700)
 {
  rover_x=rover_x+10;
 uploadBackground();
 uploadrover();
        }   
}