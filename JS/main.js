var canvasa1 = document.getElementById('a1');
var canvaswidth = document.getElementById('a1').clientWidth;
var canvasheight = document.getElementById('a1').clientHeight;
canvasa1.width = canvaswidth;
canvasa1.height = canvasheight;
var context = canvasa1.getContext('2d');
context.fillStyle = 'orange';
context.fillRect(175, 100, 100, 100);
var canvasa2 = document.getElementById('a2');
var canvaswidth = document.getElementById('a2').clientWidth;
var canvasheight = document.getElementById('a2').clientHeight;
canvasa2.width = canvaswidth;
canvasa2.height = canvasheight;
var context = canvasa2.getContext('2d');
context.beginPath();
context.moveTo(canvaswidth * 0, canvasheight);
context.lineTo(canvaswidth, canvasheight * 0);
context.strokeStyle = 'red';
context.stroke();
var canvasa3 = document.getElementById('a3');
var canvaswidth = document.getElementById('a3').clientWidth;
var canvasheight = document.getElementById('a3').clientHeight;
canvasa3.width = canvaswidth;
canvasa3.height = canvasheight;
var context = canvasa3.getContext('2d');
context.beginPath();
context.fillStyle = 'black';
context.fillRect(canvasa1.width / 2, canvasa1.height / 2, canvasa1.width / 2, canvasa1.height / 2);
var canvasa4 = document.getElementById('a4');
var canvaswidth = document.getElementById('a4').clientWidth;
var canvasheight = document.getElementById('a4').clientHeight;
canvasa4.width = canvaswidth;
canvasa4.height = canvasheight;
var context = canvasa4.getContext('2d');
var size = 100;
var padding = 10;
context.beginPath();
context.fillStyle = 'green';
context.fillRect(canvasa1.width - (size + padding), canvasa1.height - (size + padding), size, size);
var canvasa5 = document.getElementById('a5');
var canvaswidth = document.getElementById('a5').clientWidth;
var canvasheight = document.getElementById('a5').clientHeight;
canvasa5.width = canvaswidth;
canvasa5.height = canvasheight;
var context = canvasa5.getContext('2d');
context.fillStyle = 'rgba(255,0,0,.5)';
context.fillRect((canvasa5.width / 2) - (padding * 2.5), (canvasa5.height / 2) - (padding * 2.5), size, size);
context.fillStyle = 'rgba(0,0,255,.5)';
context.fillRect((canvasa5.width / 2) - (padding * 7.5), (canvasa5.height / 2) - (padding * 7.5), size, size);
var canvasa6 = document.getElementById('a6');
var canvaswidth = document.getElementById('a6').clientWidth;
var canvasheight = document.getElementById('a6').clientHeight;
canvasa6.width = canvaswidth;
canvasa6.height = canvasheight;
var context = canvasa6.getContext('2d');
context.fillStyle = 'red';
context.fillRect(size, padding * 7.5, size * 2.5, size / 2)
context.fillStyle = 'white';
context.fillRect(size, padding * 12.5, size * 2.5, size / 2)
context.fillStyle = 'green';
context.fillRect(size, padding * 17.5, size * 2.5, size / 2)
var canvasa7 = document.getElementById('a7');
var canvaswidth = document.getElementById('a7').clientWidth;
var canvasheight = document.getElementById('a7').clientHeight;
canvasa7.width = canvaswidth;
canvasa7.height = canvasheight;
var context = canvasa7.getContext('2d');
context.beginPath();
context.moveTo(canvaswidth * 0, canvasheight);
context.lineTo(canvaswidth, canvasheight * 0);
context.strokeStyle = 'red';
context.stroke();
context.beginPath();
context.moveTo(canvaswidth, canvasheight);
context.lineTo(canvaswidth * 0, canvasheight * 0);
context.strokeStyle = 'red';
context.stroke();
var canvasa8 = document.getElementById('a8');
var canvaswidth = document.getElementById('a8').clientWidth;
var canvasheight = document.getElementById('a8').clientHeight;
canvasa8.width = canvaswidth;
canvasa8.height = canvasheight;
var context = canvasa8.getContext('2d');
var triangleStartx = 150;
var triangleStarty = 225;
context.beginPath();
context.moveTo(triangleStartx, triangleStarty);
context.lineTo(triangleStartx + triangleStartx, triangleStarty);
context.lineTo(triangleStartx+(triangleStarty-triangleStartx),triangleStarty-triangleStartx);
context.lineTo(triangleStartx, triangleStarty);
context.strokeStyle = 'rgba(128,128,128,.5)';
context.stroke();
context.fillStyle='rgba(255,165,0,.5)';
context.fill();
var canvasa9 = document.getElementById('a9');
var canvaswidth = document.getElementById('a9').clientWidth;
var canvasheight = document.getElementById('a9').clientHeight;
canvasa9.width = canvaswidth;
canvasa9.height = canvasheight;
var context = canvasa9.getContext('2d');
context.beginPath();
context.moveTo(canvaswidth/2,canvasheight*0);
context.lineTo(canvaswidth/2,canvasheight);
context.strokeStyle='green';
context.stroke();
context.beginPath();
context.moveTo(canvaswidth*0,canvasheight/2);
context.lineTo(canvaswidth,canvasheight/2);
context.strokeStyle='red';
context.stroke();