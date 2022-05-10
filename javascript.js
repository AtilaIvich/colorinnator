var vbody = document.getElementById('bodyid');
var vsection = document.getElementsByTagName('section')[0];
var vquadro = document.getElementById('quadro');
var vblack = document.getElementById('black');
var vr = document.getElementById('r');
var vg = document.getElementById('g');
var vb = document.getElementById('b');
var vwhite = document.getElementById('white');
var vclear = document.getElementById('clear');

vquadro.addEventListener('click', clickquadro);
vblack.addEventListener('click', () => click(1));
vr.addEventListener('click', () => click(2));
vg.addEventListener('click', () => click(3));
vb.addEventListener('click', () => click(4));
vwhite.addEventListener('click', () => click(5));
vclear.addEventListener('click', reset);

var bgquadro = 'white';
vbody.style.backgroundColor = 'black';

function clickquadro() {
    if (bgquadro == 'white') {
        vbody.style.backgroundColor = '#011F4B'; //blue
        bgquadro = '#2C82C9'; //light blue
        vquadro.style.backgroundColor = '#2C82C9'; //light blue
    }
    else if (bgquadro == '#2C82C9') { //light blue
        vbody.style.backgroundColor = '#1E453E'; //green
        bgquadro = '#2CC990'; //light green
        vquadro.style.backgroundColor = '#2CC990'; //light green
    }
    else if (bgquadro == '#2CC990') { //light green
        vbody.style.backgroundColor = '#585229'; //yellow
        bgquadro = '#CCB200'; //light yellow
        vquadro.style.backgroundColor = '#CCB200'; //light yellow
    }
    else if (bgquadro == '#CCB200') { //light yellow
        vbody.style.backgroundColor = '#541B3D'; //pink
        bgquadro = '#F2629C'; //light pink
        vquadro.style.backgroundColor = '#F2629C'; //light pink
    }
    else if (bgquadro == '#F2629C') { //light pink
        vbody.style.backgroundColor = '#610101'; //red
        bgquadro = '#FC6042'; //light red
        vquadro.style.backgroundColor = '#FC6042'; //light red
    }
    else if (bgquadro == '#FC6042') { //light red
        vbody.style.backgroundColor = 'white'; //white
        bgquadro = 'black'; //black
        vquadro.style.backgroundColor = 'black'; //black

        vquadro.style.border = '1px solid black';
        vsection.style.backgroundColor = 'white';
        vsection.style.border = '3px solid black';
        vclear.style.border = '2px solid black';
        vclear.style.color = 'black';
    }
    else if (bgquadro == 'black') { //black
        vbody.style.backgroundColor = 'black';
        bgquadro = 'white';
        vquadro.style.backgroundColor = 'white';

        vquadro.style.border = '1px solid white';
        vsection.style.backgroundColor = 'black';
        vsection.style.border = '3px solid white';
        vclear.style.border = '2px solid white';
        vclear.style.color = 'white';
    }
}

function click(x) {
    vquadro.style.backgroundColor = bgquadro;
    switch (x) {
        case 1:
            vquadro.innerHTML += '<div id="blocoblack"></div>';
            if (bgquadro == 'black') {
                randomColor();
            }
            break
        
        case 2:
            vquadro.innerHTML += '<div id="blocor"></div>';
            if (bgquadro == '#FC6042') {
                randomColor();
            }
            break
        
        case 3:
            vquadro.innerHTML += '<div id="blocog"></div>';
            if (bgquadro == '#2CC990') {
                randomColor();
            }
            break
    
        case 4:
            vquadro.innerHTML += '<div id="blocob"></div>';
            if (bgquadro == '#2C82C9') {
                randomColor();
            }
            break

        case 5:
            vquadro.innerHTML += '<div id="blocowhite"></div>';
            if (bgquadro == 'white') {
                randomColor();
            }
            break
    }
}

var colorR = 0;

function randomColor() {
    if (colorR == 0) {
        colorR = 1;
        vquadro.style.backgroundColor = '#49E2DE';
    } else if (colorR == 1) {
        colorR = 2;
        vquadro.style.backgroundColor = '#6EE214';
    } else if (colorR == 2) {
        colorR = 3;
        vquadro.style.backgroundColor = '#F2DB00';
    } else if (colorR == 3) {
        colorR = 4;
        vquadro.style.backgroundColor = '#E400F2';
    } else if (colorR == 4) {
        colorR =  5;
        vquadro.style.backgroundColor = '#001CF2';
    } else if (colorR == 5) {
        colorR = 0;
        vquadro.style.backgroundColor = '#F21072';
    }
}

function reset() {
    vbody.style.backgroundColor = 'black';
    bgquadro = 'white';
    vquadro.style.backgroundColor = 'white';
    vquadro.innerHTML = '';

    vquadro.style.border = '1px solid white';
    vsection.style.backgroundColor = 'black';
    vsection.style.border = '3px solid white';
    vclear.style.border = '2px solid white';
    vclear.style.color = 'white';
}