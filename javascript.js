var body = document.getElementsByTagName('body')[0];
var section = document.getElementsByTagName('section')[0];
var board = document.getElementById('board');
var black = document.getElementById('black');
var r = document.getElementById('r');
var g = document.getElementById('g');
var b = document.getElementById('b');
var white = document.getElementById('white');
var clear = document.getElementById('clear');
var undo = document.getElementById('undo');

board.addEventListener('click', clickboard);
black.addEventListener('click', () => click(1));
r.addEventListener('click', () => click(2));
g.addEventListener('click', () => click(3));
b.addEventListener('click', () => click(4));
white.addEventListener('click', () => click(5));
clear.addEventListener('click', reset);
undo.addEventListener('click', del);

var bgboard = 'white'; //bgboard == background board
body.style.backgroundColor = 'black';

function clickboard() {
    if (bgboard == 'white') {
        body.style.backgroundColor = '#011F4B'; //blue
        bgboard = '#2C82C9'; //light blue
        board.style.backgroundColor = bgboard;
    }
    else if (bgboard == '#2C82C9') { //light blue
        body.style.backgroundColor = '#1E453E'; //green
        bgboard = '#2CC990'; //light green
        board.style.backgroundColor = bgboard;
    }
    else if (bgboard == '#2CC990') { //light green
        body.style.backgroundColor = '#585229'; //yellow
        bgboard = '#CCB200'; //light yellow
        board.style.backgroundColor = bgboard;
    }
    else if (bgboard == '#CCB200') { //light yellow
        body.style.backgroundColor = '#541B3D'; //pink
        bgboard = '#F2629C'; //light pink
        board.style.backgroundColor = bgboard;
    }
    else if (bgboard == '#F2629C') { //light pink
        body.style.backgroundColor = '#610101'; //red
        bgboard = '#FC6042'; //light red
        board.style.backgroundColor = bgboard;
    }
    else if (bgboard == '#FC6042') { //light red
        body.style.backgroundColor = 'white'; //white
        bgboard = 'black'; //black
        board.style.backgroundColor = bgboard;

        board.style.border = '1px solid black';
        section.style.backgroundColor = 'white';
        section.style.border = '3px solid black';
        clear.style.border = '2px solid black';
        clear.style.color = 'black';
        undo.style.border = '2px solid black';
        undo.style.color = 'black';
    }
    else if (bgboard == 'black') { //black
        body.style.backgroundColor = 'black';
        bgboard = 'white';
        board.style.backgroundColor = bgboard;

        board.style.border = '1px solid white';
        section.style.backgroundColor = 'black';
        section.style.border = '3px solid white';
        clear.style.border = '2px solid white';
        clear.style.color = 'white';
        undo.style.border = '2px solid white';
        undo.style.color = 'white';
    }
}

var colorArray = [];

function click(x) {
    board.style.backgroundColor = bgboard;
    switch (x) {
        case 1:
            colorArray.push('<div id="blockblack"></div>');
            if (bgboard == 'black') {
                changeBoardColor();
            }
            break
        
        case 2:
            colorArray.push('<div id="blockr"></div>');
            if (bgboard == '#FC6042') {
                changeBoardColor();
            }
            break
        
        case 3:
            colorArray.push('<div id="blockg"></div>');
            if (bgboard == '#2CC990') {
                changeBoardColor();
            }
            break
    
        case 4:
            colorArray.push('<div id="blockb"></div>');
            if (bgboard == '#2C82C9') {
                changeBoardColor();
            }
            break

        case 5:
            colorArray.push('<div id="blockwhite"></div>');
            if (bgboard == 'white') {
                changeBoardColor();
            }
            break
    }
    board.innerHTML = colorArray.join('');
}

var colorR = 0;

function changeBoardColor() {
    if (colorR == 0) {
        colorR = 1;
        board.style.backgroundColor = '#49E2DE';
    } else if (colorR == 1) {
        colorR = 2;
        board.style.backgroundColor = '#6EE214';
    } else if (colorR == 2) {
        colorR = 3;
        board.style.backgroundColor = '#F2DB00';
    } else if (colorR == 3) {
        colorR = 4;
        board.style.backgroundColor = '#E400F2';
    } else if (colorR == 4) {
        colorR =  5;
        board.style.backgroundColor = '#001CF2';
    } else if (colorR == 5) {
        colorR = 0;
        board.style.backgroundColor = '#F21072';
    }
}

function reset() {
    body.style.backgroundColor = 'black';
    bgboard = 'white';
    board.style.backgroundColor = 'white';
    board.innerHTML = '';
    colorArray = [];

    board.style.border = '1px solid white';
    section.style.backgroundColor = 'black';
    section.style.border = '3px solid white';
    clear.style.border = '2px solid white';
    clear.style.color = 'white';
    undo.style.border = '2px solid white';
    undo.style.color = 'white';
}

function del() {
    switch(colorArray[colorArray.length - 1]) {
        case '<div id="blockblack"></div>':
            if (bgboard == 'black') {
                changeBoardColor();
            }
            break;

        case '<div id="blockr"></div>':
            if (bgboard == '#FC6042') {
                changeBoardColor();
            }
            break;

        case '<div id="blockg"></div>':
            if (bgboard == '#2CC990') {
                changeBoardColor();
            }
            break;

        case '<div id="blockb"></div>':
            if (bgboard == '#2C82C9') {
                changeBoardColor();
            }
            break;

        case '<div id="blockwhite"></div>':
            if (bgboard == 'white') {
                changeBoardColor();
            }
            break;
    }
    colorArray.pop();
    board.innerHTML = colorArray.join('');
}