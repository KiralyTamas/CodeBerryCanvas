/*A középső sárga kocka kódja*/

var canvasa1 = document.getElementById('a1');
var canvaswidth = document.getElementById('a1').clientWidth;
var canvasheight = document.getElementById('a1').clientHeight;
canvasa1.width = canvaswidth;
canvasa1.height = canvasheight;
var context = canvasa1.getContext('2d');
context.fillStyle = 'orange';
context.fillRect(175, 100, 100, 100);

/*A piros átlós vonal kódja*/

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

/*A fekete negyed négyzet kódja*/

var canvasa3 = document.getElementById('a3');
var canvaswidth = document.getElementById('a3').clientWidth;
var canvasheight = document.getElementById('a3').clientHeight;
canvasa3.width = canvaswidth;
canvasa3.height = canvasheight;
var context = canvasa3.getContext('2d');
context.fillStyle = 'black';
context.fillRect(canvasa1.width / 2, canvasa1.height / 2, canvasa1.width / 2, canvasa1.height / 2);

/*A kicsi zöld négyzet kódja*/

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

/*Az egymásba érő két négyzet kódja*/

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

/*A magyar zászló kódja*/

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

/*A két átlós piros vonal kódja*/

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

/*A sárga háromszög és a szürke keret kódja */

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
context.lineTo(triangleStartx + (triangleStarty - triangleStartx), triangleStarty - triangleStartx);
context.lineTo(triangleStartx, triangleStarty);
context.strokeStyle = 'rgba(128,128,128,.5)';
context.stroke();
context.fillStyle = 'rgba(255,165,0,.5)';
context.fill();

/*A zöld és piros kereszt kódja*/

var canvasa9 = document.getElementById('a9');
var canvaswidth = document.getElementById('a9').clientWidth;
var canvasheight = document.getElementById('a9').clientHeight;
canvasa9.width = canvaswidth;
canvasa9.height = canvasheight;
var context = canvasa9.getContext('2d');
context.beginPath();
context.moveTo(canvaswidth / 2, canvasheight * 0);
context.lineTo(canvaswidth / 2, canvasheight);
context.strokeStyle = 'green';
context.stroke();
context.beginPath();
context.moveTo(canvaswidth * 0, canvasheight / 2);
context.lineTo(canvaswidth, canvasheight / 2);
context.strokeStyle = 'red';
context.stroke();

/*Az átlósan sorakozó sárga négyzetek kódja*/

var canvasa10 = document.getElementById('a10');
var canvaswidth = document.getElementById('a10').clientWidth;
var canvasheight = document.getElementById('a10').clientHeight;
canvasa10.width = canvaswidth;
canvasa10.height = canvasheight;
var context = canvasa10.getContext('2d');
var startXY = 20;
var boxSize = 45;
for (let boxNumber = 0; boxNumber < 10; boxNumber++) {
    context.fillStyle = 'rgba(255,165,0,.5)';
    context.fillRect(startXY, startXY, boxSize, boxSize);
    startXY += boxSize / 2;
};

/*A sárga lépcsőzetes négyzetek kódja*/

var canvasa11 = document.getElementById('a11');
var canvaswidth = document.getElementById('a11').clientWidth;
var canvasheight = document.getElementById('a11').clientHeight;
canvasa11.width = canvaswidth;
canvasa11.height = canvasheight;
var context = canvasa11.getContext('2d');
var boxes = 50;
var margin = 5;
var spaceX = 15;
var spaceY = 15;
for (let boxesNumber = 5; boxesNumber > 0; boxesNumber--) {
    for (let littelBoxes = 0; littelBoxes < boxesNumber; littelBoxes++) {
        context.fillStyle = 'rgba(255,165,0,.5)';
        context.fillRect(spaceX, spaceY, boxes, boxes);
        context.fill();
        spaceY += boxes + margin;
    }
    spaceY -= (boxes + margin) * (boxesNumber - 1);
    spaceX += (boxes + margin);
};

/*Szinváltós négyzetek kódja*/

var canvasa12 = document.getElementById('a12');
var canvaswidth = document.getElementById('a12').clientWidth;
var canvasheight = document.getElementById('a12').clientHeight;
canvasa12.width = canvaswidth;
canvasa12.height = canvasheight;
var context = canvasa12.getContext('2d');
smallBoxSize = 30;
startX = 125;
marginNumberX = startX;
marginNumberY = 50;
paddingNumber = 5;
var red = 255;
var green = 79;
var blue = 120;
for (let lineNumber = 0; lineNumber < 6; lineNumber++) {
    for (let boxNumber = 0; boxNumber < 6; boxNumber++) {
        context.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
        context.fillRect(marginNumberX, marginNumberY, smallBoxSize, smallBoxSize);
        red -= 7;
        marginNumberX += smallBoxSize + paddingNumber;
    }
    blue += 15;
    marginNumberX = startX;
    marginNumberY += smallBoxSize + paddingNumber;
};

/*A háromszög-alagút kódja*/

var canvasa13 = document.getElementById('a13');
var canvaswidth = document.getElementById('a13').clientWidth;
var canvasheight = document.getElementById('a13').clientHeight;
canvasa13.width = canvaswidth;
canvasa13.height = canvasheight;
var context = canvasa13.getContext('2d');
var triangleSX = 120;
var foot = 100;
for (let triangleNumber = 0; triangleNumber < 30; triangleNumber++) {
    context.beginPath();
    context.moveTo(triangleSX, triangleSX);
    context.lineTo(triangleSX + foot, triangleSX);
    context.lineTo(triangleSX + foot / 2, triangleSX + foot - foot * 2);
    context.lineTo(triangleSX, triangleSX);
    context.strokeStyle = 'grey';
    context.stroke();
    triangleSX += 5;
}

/*Szivárvány-négyzetek kódja*/

var canvasa14 = document.getElementById('a14');
var canvaswidth = document.getElementById('a14').clientWidth;
var canvasheight = document.getElementById('a14').clientHeight;
canvasa14.width = canvaswidth;
canvasa14.height = canvasheight;
var context = canvasa14.getContext('2d');
var rainbowStart = 0;
var rainbowX = 450;
var rainbowY = 350;
var hue = 360;
for (let rainbowNumber = 0; rainbowNumber < 17; rainbowNumber++) {
    context.fillStyle = 'hsl(' + hue + ',60%,45%)';
    context.fillRect(rainbowStart, rainbowStart, rainbowX, rainbowY);
    rainbowStart += 10;
    rainbowX -= 20;
    rainbowY -= 20;
    hue -= hue / 17;
}

/*Szines négyzetek kódja feltételekkel*/

var canvasa15 = document.getElementById('a15');
var canvaswidth = document.getElementById('a15').clientWidth;
var canvasheight = document.getElementById('a15').clientHeight;
canvasa15.width = canvaswidth;
canvasa15.height = canvasheight;
var context = canvasa15.getContext('2d');
var boxesSize = 50;
var startX = 20;
var startY = 15;
var if3 = 'rgba(0,0,255,.5)';
var if5 = 'rgba(255,255,0,.5)';
var if35 = 'rgba(0,255,0,.5)';
var if0 = 'rgba(0,0,0,.5)';
for (var colorBoxes = 1; colorBoxes <= 15; colorBoxes++) {
    if ((colorBoxes % 3 + colorBoxes % 5) === 0) {
        context.fillStyle = if35;
    } else if (colorBoxes % 5 === 0) {
        context.fillStyle = if5;
    } else if (colorBoxes % 3 === 0) {
        context.fillStyle = if3;
    } else {
        context.fillStyle = if0;
    }
    context.fillRect(startX * colorBoxes, startY * colorBoxes, boxesSize, boxesSize);
};

/*Piros csíkos négyzet kódja*/

var canvasa16 = document.getElementById('a16');
var canvaswidth = document.getElementById('a16').clientWidth;
var canvasheight = document.getElementById('a16').clientHeight;
canvasa16.width = canvaswidth;
canvasa16.height = canvasheight;
var context = canvasa16.getContext('2d');
var middleY = canvasheight / 2;
var endUpX = canvaswidth / 2;
var endUpY = 0;
var endDownX = canvaswidth / 2;
var endDownY = canvasheight;
var rgba = 'rgba(255,0,0,.5)';
for (let lineNumber = 0; lineNumber <= canvaswidth; lineNumber++) {
    if (lineNumber % 3 === 0) {
        if (lineNumber % 2 == 0) {
            context.beginPath();
            context.moveTo(lineNumber, middleY);
            context.lineTo(endUpX, endUpY);
            context.strokeStyle = rgba;
            context.stroke();
        } else {
            context.beginPath();
            context.moveTo(lineNumber, middleY);
            context.lineTo(endDownX, endDownY);
            context.strokeStyle = rgba;
            context.stroke();
        }
    }
}

/*Dupla kékcsíkos háromszög kódja*/

var canvasa17 = document.getElementById('a17');
var canvaswidth = document.getElementById('a17').clientWidth;
var canvasheight = document.getElementById('a17').clientHeight;
canvasa17.width = canvaswidth;
canvasa17.height = canvasheight;
var context = canvasa17.getContext('2d');
var rgbaBlue = 'rgba(0,0,255,.5)';
for (let counterNumber = 0; counterNumber <= canvaswidth; counterNumber++) {
    if (counterNumber % 4 === 0) {
        context.beginPath();
        context.moveTo(counterNumber, canvasheight / 2);
        context.lineTo(canvaswidth - canvaswidth, canvasheight - canvasheight);
        context.strokeStyle = rgbaBlue;
        context.stroke();
    } else if (counterNumber % 4 === 1) {
        context.beginPath();
        context.moveTo(counterNumber, canvasheight / 2);
        context.lineTo(canvaswidth, canvasheight - canvasheight);
        context.strokeStyle = rgbaBlue;
        context.stroke();
    } else if (counterNumber % 4 === 2) {
        context.beginPath();
        context.moveTo(counterNumber, canvasheight / 2);
        context.lineTo(canvaswidth - canvaswidth, canvasheight);
        context.strokeStyle = rgbaBlue;
        context.stroke();
    } else if (counterNumber % 4 === 3) {
        context.beginPath();
        context.moveTo(counterNumber, canvasheight / 2);
        context.lineTo(canvaswidth, canvasheight);
        context.strokeStyle = rgbaBlue;
        context.stroke();
    }
}

/*3 darab háromszög kódja*/

var canvasa18 = document.getElementById('a18');
var canvaswidth = document.getElementById('a18').clientWidth;
var canvasheight = document.getElementById('a18').clientHeight;
canvasa18.width = canvaswidth;
canvasa18.height = canvasheight;
var context = canvasa18.getContext('2d');
var rgbaS = 'rgba(0,0,0,.5)';
var rgbaF = 'rgba(255,165,0,.5)';
function triangle(positionX, positionY, size) {
    context.beginPath();
    context.moveTo(positionX, positionY);
    context.lineTo(positionX - size / 2, positionY + size);
    context.lineTo(positionX + size / 2, positionY + size);
    context.lineTo(positionX, positionY);
    context.strokeStyle = rgbaS;
    context.stroke();
    context.fillStyle = rgbaF;
    context.fill();
}
triangle(230, 160, 50);
triangle(270, 100, 50);
triangle(200, 50, 150);

/*3 rózsaszín csillag kódja*/

var canvasa19 = document.getElementById('a19');
var canvaswidth = document.getElementById('a19').clientWidth;
var canvasheight = document.getElementById('a19').clientHeight;
canvasa19.width = canvaswidth;
canvasa19.height = canvasheight;
var context = canvasa19.getContext('2d');
var rgbStar = 'rgb(233,159,184)';
function star(positionX, positionY, size) {
    context.beginPath();
    context.moveTo(positionX, positionY);
    context.lineTo(positionX + size, positionY);
    context.lineTo(positionX + size * 0.15, positionY + size * 0.5);
    context.lineTo(positionX + size * 0.5, positionY - size * 0.4);
    context.lineTo(positionX + size * 0.85, positionY + size * 0.5);
    context.strokeStyle = rgbStar;
    context.stroke();
    context.fillStyle = rgbStar;
    context.fill();
}
star(40, 50, 75);
star(130, 120, 100);
star(250, 220, 150);

/*1000 véletlenszerű vonal kódja*/

var canvasa20 = document.getElementById('a20');
var canvaswidth = document.getElementById('a20').clientWidth;
var canvasheight = document.getElementById('a20').clientHeight;
canvasa20.width = canvaswidth;
canvasa20.height = canvasheight;
var context = canvasa20.getContext('2d');
function lineToCenter(positionX, positionY, color) {
    context.beginPath();
    context.moveTo(positionX, positionY)
    context.lineTo(canvaswidth * 0.5, canvasheight * 0.5)
    context.strokeStyle = color;
    context.stroke();
}
function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let lineCenterNumber = 1; lineCenterNumber <= 1000; lineCenterNumber++) {
    lineToCenter(random(canvaswidth, 0), random(canvasheight, 0), 'teal')
}

/*Méh-sejtek kódja*/

var canvasa21 = document.getElementById('a21');
var canvaswidth = document.getElementById('a21').clientWidth;
var canvasheight = document.getElementById('a21').clientHeight;
canvasa21.width = canvaswidth;
canvasa21.height = canvasheight;
var context = canvasa21.getContext('2d');
var totalwidth = 113;
var totalheight = 98;
function drawHexagon(positionX, positionY) {
    context.beginPath();
    context.moveTo(positionX, positionY);
    context.lineTo(positionX + (totalwidth * 0.25), positionY - (totalheight * 0.5));
    context.lineTo(positionX + (totalwidth * 0.75), positionY - (totalheight * 0.5));
    context.lineTo(positionX + totalwidth, positionY);
    context.lineTo(positionX + (totalwidth * 0.75), positionY + (totalheight * 0.5));
    context.lineTo(positionX + (totalwidth * 0.25), positionY + (totalheight * 0.5));
    context.lineTo(positionX, positionY);
    context.strokeStyle = 'orange';
    context.stroke();
    if (positionX === 261 & positionY === 230) {
        context.fillStyle = 'orange';
        context.fill();
    }
}

drawHexagon(76, 120);
drawHexagon(76, 230);
drawHexagon(168.5, 65);
drawHexagon(168.5, 175);
drawHexagon(168.5, 285);
drawHexagon(261, 120);
drawHexagon(261, 230);

/*A sakktábla kódja*/

var canvasa22 = document.getElementById('a22');
var canvaswidth = document.getElementById('a22').clientWidth;
var canvasheight = document.getElementById('a22').clientHeight;
canvasa22.width = canvaswidth;
canvasa22.height = canvasheight;
var context = canvasa22.getContext('2d');
var chessStartX = canvaswidth - canvaswidth;
var chessStartY = canvasheight - canvasheight;
function drawCheckeredPattern(row, col) {
    for (let colNumber = 1; colNumber <= 8; colNumber++) {
        for (let rowNumber = 1; rowNumber <= 8; rowNumber++) {
            context.fillStyle = 'black';
            if ((rowNumber + colNumber) % 2 === 0) {
                context.fillStyle = 'white';
            }
            context.fillRect(chessStartX, chessStartY, canvaswidth / row, canvasheight / col);
            chessStartX += canvaswidth / row;
        }
        chessStartY = (canvasheight / col) * colNumber;
        chessStartX = canvaswidth - canvaswidth;
    }
}
drawCheckeredPattern(8, 8);

/*6 háromszög kódja*/

var canvasa23 = document.getElementById('a23');
var canvaswidth = document.getElementById('a23').clientWidth;
var canvasheight = document.getElementById('a23').clientHeight;
canvasa23.width = canvaswidth;
canvasa23.height = canvasheight;
var context = canvasa23.getContext('2d');
var base = 100;
var altitude = 86.6;
var triangleColor = 'rgb(227,98,102)';
var triangleGreen = 'rgb(38,172,73)';
var triangleDGreen = 'rgb(34,128,128)';
function drawTriangle(positionX, positionY) {
    for (let rowCounter = 0; rowCounter < 3; rowCounter++) {
        for (let triangleCounter = 0; triangleCounter <= rowCounter; triangleCounter++) {
            context.beginPath();
            context.moveTo(positionX - rowCounter * base / 2 + triangleCounter * base, positionY + rowCounter * altitude);
            context.lineTo(positionX - (rowCounter + 1) * base / 2 + triangleCounter * base, positionY + (rowCounter + 1) * altitude);
            context.lineTo(positionX - (rowCounter - 1) * base / 2 + triangleCounter * base, positionY + (rowCounter + 1) * altitude);
            context.lineTo(positionX - rowCounter * base / 2 + triangleCounter * base, positionY + rowCounter * altitude);
            if (rowCounter == 0) {
                context.strokeStyle = 'rgb(227,98,102)';
                context.fillStyle = 'rgb(227,98,102)';
            } else if (rowCounter == 1) {
                context.strokeStyle = 'rgb(38,172,73)';
                context.fillStyle = 'rgb(38,172,73)';
            } else {
                context.strokeStyle = 'rgb(34,128,128)';
                context.fillStyle = 'rgb(34,128,128)';
            }
            context.stroke();
            context.fill();

        }

    }
}
drawTriangle(225, 33);

function logUntilSmall(array) {
    const condition=" pozitiv";
    const error=" megállította a logolást";
    let i,message;
    for (i = 0; i < array.length && array[i] > 0; i++) {
        console.log(array[i] + condition);
    }
    if (i === array.length) {
        message = "minden elem"+condition;
    } else {
        message = array[i] + error;
    }
    console.log(message);
}
const testArray=[1,3,4,7,10,11,2];
logUntilSmall(testArray);
testArray.push(-1);
logUntilSmall(testArray);