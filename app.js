var hero = new Object();
var enemy = new Object();
enemy.color = "#000000";
enemy.x = 200
enemy.y = 200
enemy.r = 20
hero.color = "#AABBCC";
hero.x = 50
hero.y = 50
hero.r = 10
function checkT(){
    if(enemy.r>0){
        let dis2=(hero.x-enemy.x)*(hero.x-enemy.x)+(hero.y-enemy.y)*(hero.y-enemy.y);
        if(dis2<=(enemy.r+hero.r)*(enemy.r+hero.r)){
            enemy.r=0;
        }
    }
}
function heroMoveUp(){
    hero.y-=10;
    checkT()
    rfC();
}
function heroMoveLeft(){
    hero.x-=10;
    checkT()
    rfC();
}
function heroMoveRight(){
    hero.x+=10;
    checkT()
    rfC();
}
function heroMoveDown(){
    hero.y+=10;
    checkT()
    rfC();
}
function rfC(){
    var c=document.getElementById("myCanvas");
    var cxt=c.getContext("2d");
    var bgcolor = "#FFFFFF";
    cxt.fillStyle=bgcolor;
    cxt.fillRect(0,0,c.width,c.height);
    
    cxt.fillStyle=enemy.color;
    cxt.beginPath();
    cxt.arc(enemy.x,enemy.y,enemy.r,0,Math.PI*2,true);
    cxt.closePath();
    cxt.fill();

    cxt.fillStyle=hero.color;
    cxt.beginPath();
    cxt.arc(hero.x,hero.y,hero.r,0,Math.PI*2,true);
    cxt.closePath();
    cxt.fill();
}
rfC();