var canvas = document.getElementById('myCanvas');
var canvaswidth = document.getElementById('myCanvas').clientWidth;
var canvasheight = document.getElementById('myCanvas').clientHeight;
canvas.width=canvaswidth;
canvas.height=canvasheight;
var context = canvas.getContext('2d');
context.fillStyle = 'orange';
context.fillRect(175, 100, 100, 100);
context.beginPath();
context.moveTo(0, 300);
context.lineTo(450, 0);
context.strokeStyle = 'red';
context.stroke();
context.beginPath();
context.fillStyle='black';
context.fillRect(canvas.width/2,canvas.height/2,canvas.width/2,canvas.height/2)