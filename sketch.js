//I inserted comments so that it is easier for you to grade !!


//Begining of Variables for Task 7 !!
var jerome = 0;
var budi = 30;
// End of Variables for Task 7 !!
var bye;
var sound = [238, 125, 286, 120, 269, 183, 230, 176];
var myFace = 340;

function setup() {
    createCanvas(800,500);
    //Task 5 HERE !!
    background(50);
}

function draw() {
    //Task 6 HERE !!
    hello();
    fill(255, 0 , 0);
    noStroke();
    if(jerome < 300){
        jerome += 5;
        budi += 1;
    }
    if(jerome > 300){
        jerome = jerome - 20;
    }
    //Task 7 shape HERE !!
    rect(350, budi ,jerome , 30);
    //Task 7 shape HERE !!
    
    bye = random(500);
    
    //Task 8 HERE !!
    if(bye < 250){
        fill(random(255), 0, random(255));
        ellipse(340, 340, 60, 60);
    }else{
        fill(random(255), random(10), random(255));
        rect(340, myFace, 50, 50);
    }
    //Task 10 HERE !!
    quad(sound[0], sound[1], sound[2], sound[3],sound[4], sound[5], sound[6], sound[7]);
}

function hello(){
    //Task 9 HERE !!
    for(var i = 0;i < 300; i += 20){
        noFill();
        stroke(28, 221, 208);
        bezier(jerome || mouseX -(i/1), mouseY + i, 40, 20, 400, 300, 240-(i/16), 300 + (i/8));
    }
    fill(142, 68, 173);
    stroke(241, 196, 15);
    strokeWeight(4);
     ellipse(50, 50, 80, 80);
}