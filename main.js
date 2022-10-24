canvas = document.getElementById("mycan");
ctx = canvas.getContext("2d");

mars_array= ["mars.jpeg","Mars2.jpg","Mars3.jpg","Mars4.jpg","Mars5.jpg","Mars6.jpg"];
RN=Math.floor(Math.random()*6);

rover_x = 10;
rover_y = 10;

rover_width = 100;
rover_height = 75;

rover_image = "rover.png";
background_image = mars_array[RN];

//defining add() 

function add() {


    background_imgTag = new Image(); //defining a variable with a new image 
    background_imgTag.onload = uploadbackground; // setting a function, onloading this variable
    background_imgTag.src = background_image; // load image
    // rover

    rover_imgtag = new Image();
    rover_imgtag.onload = uploadrover;
    rover_imgtag.src = rover_image;

}

// defining background upload

function uploadbackground() {

    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);


}

// Defining rover upload

function uploadrover() {
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    var keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == "37") {
        left();
        console.log("left");
    }

    if (keypressed == "38") {
        up();
        console.log("up");
    }
    if (keypressed == "39") {
        right();
        console.log("right");
    }
    if (keypressed == "40") {
        down();
        console.log("down");
    }
}

function left(){

   if(rover_x>=0){
    rover_x = rover_x - 10;
    console.log("rovers new position is x="+rover_x+"y="+rover_y);
    uploadbackground(); 
    uploadrover();
   }  

}

// Right
function right(){

    if(rover_x<=700){
     rover_x = rover_x + 10;
     console.log("rovers new position is x="+rover_x+"y="+rover_y);
     uploadbackground(); 
     uploadrover();
    }  
 
 }

 // Down

 
function down(){

    if(rover_y<=525){
     rover_y = rover_y + 10;
     console.log("rovers new position is x="+rover_x+"y="+rover_y);
     uploadbackground(); 
     uploadrover();
    }  
 
 }

 // Up
 function up(){

    if(rover_y>=0){
     rover_y = rover_y - 10;
     console.log("rovers new position is x="+rover_x+"y="+rover_y);
     uploadbackground(); 
     uploadrover();
    }  
 
 }

 