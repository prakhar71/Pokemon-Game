/*$(document).ready(function () {
    $("body").click(function () {
        alert("welocome to future" + event.target);
    });
});
$(document).ready(function () {
    $("#MyForm").submit(function () {
        alert("Hello");
        return true;
    });
});*/
/*function create() {

    var counter=0;
    return{
        increment:function () {
            counter++;
        },
        print:function () {
            console.log(counter);
        }
    }
    var n=create();
    n.increment();
    n.print();

}*/
/*$(document).ready(function () {
   $('.myclass').css("background-color","yellow")
});*/
/*function Contact(fname,lname) {
    this.fname=fname;
    this.lname=lname;
}*/

function loadImages(){
     playerImage = new Image;
     playerImage.src = "assest/pika.png";

      enemyImage = new Image;
    enemyImage.src = "assest/haunter.png";

     ballImage = new Image;
    ballImage.src = "assest/Pokeball.png";
}

function init() {

    GAME_OVER = false;






    canvas= document.getElementById('mycanvas');
    W=canvas.width;
    H=canvas.height;
  //console.log(canvas);
    pen = canvas.getContext('2d');

    enemy= {
        x:W/2,
        y:H-100,
        w:50,
        h:50,
       speed:4,
        xspeed:5
    };

    goal= {
      x: W-100,
       y:H/2,
       w:100,
       h:100,
        speed:5

    };
    player= {
        x:10,
        y:H/2,
        w:100,
        h:100,
        speed:0,

    };

    canvas.addEventListener('mousedown',function () {
        player.speed=10;
    });
    canvas.addEventListener('mouseup',function () {
        player.speed=0;
    });

}

function loop() {
    draw();
    update();

   if(GAME_OVER == false){
       window.requestAnimationFrame(loop);
   }
}
init();
window.requestAnimationFrame(loop);
loadImages();


function isColliding(r1,r2) {
    var firstCo=Math.abs((r1.x-r2.x)) <=r1.w;
    var secCo=Math.abs((r1.y-r2.y)) <=r1.h;
    return (firstCo && secCo);
}

function draw() {

    pen.clearRect(0,0,W,H);
    pen.fillStyle="red";
    pen.drawImage(enemyImage,enemy.x,enemy.y,enemy.w,enemy.h);


    pen.fillStyle="green";
    pen.drawImage(ballImage,goal.x,goal.y,goal.w,goal.h);


    pen.fillStyle="blue";
    pen.drawImage(playerImage,player.x,player.y,player.w,player.h);

}

function update() {
    enemy.y=enemy.y+enemy.speed;
    enemy.x=enemy.x + enemy.xspeed;
    if((enemy.y >= (H-enemy.h)) || (enemy.y <=0)){
       enemy.speed *= -1;
    }

   if(enemy.x  >=(W-enemy.w) || enemy.x <enemy.w){
        enemy.xspeed *= -1;
    }

   player.x=player.x+player.speed;

    goal.y=goal.y+goal.speed;
    if((goal.y>= (H-goal.h)) || (goal.y <=0)){
        goal.speed *=-1;
    }

    if(isColliding(enemy,player)){
        alert("GAME OVER");
        GAME_OVER=true;
    }
    if (isColliding(player,goal)){
        alert("level 2 ");
        GAME_OVER=false;
    }




}

