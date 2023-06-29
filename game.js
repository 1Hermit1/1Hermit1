let area = document.getElementById('gameArea');
let ctx = area.getContext('2d');
//изменение для гитхаба
//блоки 
let box = new Image ()
box.src = 'Free/Items/Boxes/Box1/Idle.png'
let texctureWall = new Image()
texctureWall.src = 'Free/Background/Green.png'

//параметры для стены 
let texctureWallWidth = 1;
let texctureWallHeight = 1; 
let texctureWallY = 0;
let texctureWallX = 0;
let wallHeidht=50;
let wallWidth=100;

//рамка
let blockWidth = 10;
let blockHeight = 10;
let gap = 10;
let blockX = 0;
let blockY = 0;

//персонажи 
let fox = new Image ();
fox.src ='C:/Users/Acer/Desktop/GameJS/Free/Heroes1/Fox2.png' //главный персонаж


//параметры для персонажи 
let foxWidth = 10;
let foxHeight = 10;
let foxX = 2;
let foxY = 4;

// function render(){
// for (let i = 0; i < 30; i++){ 
//     ctx.drawImage(box, blockX, blockY, blockWidth, blockHeight );
//     blockX +=10;
// }
// blockX -=10;
// for (let i = 0; i < 15; i++) { 
//     ctx.drawImage(box, blockX, blockY, blockWidth, blockHeight,);
//     blockY += 10
// }
// blockY -= 10;
// for (let i = 0; i < 30; i++){ 
//     ctx.drawImage(box, blockX, blockY, blockWidth, blockHeight,);
//     blockX -=10;
// }
// blockX +=10;
// for (let i = 0; i < 15; i++) { 
//     ctx.drawImage(box, blockX, blockY, blockWidth, blockHeight,);
//     blockY -= 10
// }
//  window.requestAnimationFrame(render)
//  blockX = 0;
//  blockY = 0;
//  }
//  box.onload = render
//  let wallWidth = 100;
//  let wallHeidht = 50;
// ctx.drawImage() 
//управление
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    switch (e.key){
        case "d":
            rightPressed = true
            break;
        case "a":
            leftPressed = true
            break;
        case "w":
            upPressed = true
            break;
        case "s":
            downPressed = true
            break;
    }
    console.log (e.key)
}

function keyUpHandler(e) {
    rightPressed = false
    leftPressed = false
    upPressed = false
    downPressed = false
}
let speed = 1;


function preRender() { 
    mapGen("#gameArea", 22, 11, 0, 0); //вызов функции (отрисовка лабиринта)
    render()
}

function render() {
    ctx.drawImage(fox,foxX, foxY, 15, 15); //отрисовка персонажа
    if (rightPressed){
        ctx.clearRect(foxX, foxY, 1, 15)
        foxX += speed
    } else if (leftPressed){
        ctx.clearRect(foxX+8, foxY, 15, 15)
        foxX -= speed
    } else if (downPressed){
        ctx.clearRect(foxX, foxY-1, 15, 1)
       foxY += speed
    } else if (upPressed){
        ctx.clearRect(foxX, foxY+15, 15, 1)
       foxY -= speed
    }
    window.requestAnimationFrame(render)
}
function mapGen (b, c, e, a, m) {

    b = document.querySelector(b);  
    let wall = b.getContext("2d");
 
    wall.width = 13*c + 3;
    wall.height = 13*c + 3;
 
    //wall.fillStyle = "black";
    for (let i=0; i < wallHeidht; i++ )
       for (let j = 0; j < wallHeidht;  j++)
       wall.drawImage(texctureWall, texctureWallX, texctureWallY, texctureWallHeight, texctureWallWidth)
       blockX +=3
    wall.fillRect(0, 0, 13 * c + 3, 13 * e + 3);
 
    a = Array(c); 
    b = Array(c);
    let k = Array(c),
    q=1;
 
    for (cr_l = 0; cr_l < e; cr_l++) {
      for (let i = 0; i < c; i++)
      0 == cr_l && (a[i] = 0), wall.clearRect(13 * i + 3, 13 * cr_l + 3, 10, 10), k[i] = 0, 1 == b[i] && (b[i] = a[i] = 0), 0 == a[i] && (a[i] = q++);
      for ( i = 0; i < c; i++) {
      
      for (i = 0; i < c; i++) {
         k[i] = Math.floor(2 * Math.random()), b[i] = Math.floor(2 * Math.random());
         
         if ((0 == k[i] || cr_l == e - 1) && i != c - 1 && a[i + 1] != a[i]) {
             var l = a[i + 1];
             var j = 0;
             for (j = 0; j < c; j++) a[j] == l && (a[j] = a[i]);
             wall.clearRect(13 * i + 3, 13 * cr_l + 3, 15, 10)
         }
         cr_l != e - 1 && 0 == b[i] && wall.clearRect(13 * i + 3, 13 * cr_l + 3, 10, 15)
     }
 
     for (i = 0; i < c; i++) {
         var p = l = 0;
         for (j = 0; j < c; j++) a[i] == a[j] && 0 == b[j] ? p++ : l++;
         0 == p && (b[i] = 0, wall.clearRect(13 * i + 3, 13 * cr_l + 3, 10, 15))
     }
 }
    }



//лабиринт
 /*function mapGen (b, c, e, a, m) {

   b = document.querySelector(b);  
   let wall = b.getContext("2d");

   wall.width = 13*c + 3;
   wall.height = 13*c + 3;

   //wall.fillStyle = "black";
   for (let i=0; i < wallHeidht; i++ )
      for (let j = 0; j < wallHeidht;  j++)
      wall.drawImage(texctureWall, texctureWallX, texctureWallY, texctureWallHeight, texctureWallWidth)
      blockX +=3
   wall.fillRect(0, 0, 13 * c + 3, 13 * e + 3);

   a = Array(c); 
   b = Array(c);
   let k = Array(c),
   q=1;

   for (cr_l = 0; cr_l < e; cr_l++) {
     for (let i = 0; i < c; i++)
     0 == cr_l && (a[i] = 0), wall.clearRect(13 * i + 3, 13 * cr_l + 3, 10, 10), k[i] = 0, 1 == b[i] && (b[i] = a[i] = 0), 0 == a[i] && (a[i] = q++);
     for ( i = 0; i < c; i++) {
     
     for (i = 0; i < c; i++) {
        k[i] = Math.floor(2 * Math.random()), b[i] = Math.floor(2 * Math.random());
        
        if ((0 == k[i] || cr_l == e - 1) && i != c - 1 && a[i + 1] != a[i]) {
            var l = a[i + 1];
            var j = 0;
            for (j = 0; j < c; j++) a[j] == l && (a[j] = a[i]);
            wall.clearRect(13 * i + 3, 13 * cr_l + 3, 15, 10)
        }
        cr_l != e - 1 && 0 == b[i] && wall.clearRect(13 * i + 3, 13 * cr_l + 3, 10, 15)
    }

    for (i = 0; i < c; i++) {
        var p = l = 0;
        for (j = 0; j < c; j++) a[i] == a[j] && 0 == b[j] ? p++ : l++;
        0 == p && (b[i] = 0, wall.clearRect(13 * i + 3, 13 * cr_l + 3, 10, 15))
    }
}*/
}
   
//wall.clearRect(13 * c, 3, 15, 10);



 

fox.onload = preRender
