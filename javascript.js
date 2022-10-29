const body = document.body;
const gamepad = document.getElementById('gamepad');
const frame = document.getElementById('frame');

const blackBtn = document.getElementById('blackBtn');
const redBtn = document.getElementById('redBtn');
const greenBtn = document.getElementById('greenBtn');
const blueBtn = document.getElementById('blueBtn');
const whiteBtn = document.getElementById('whiteBtn');

const undoBtn = document.getElementById('undoBtn');
const clearBtn = document.getElementById('clearBtn');

frame.addEventListener('click', changeTheme);
undoBtn.addEventListener('click', del);
clearBtn.addEventListener('click', reset);

blackBtn.addEventListener('click', () => addBlock('black'));
redBtn.addEventListener('click', () => addBlock('red'));
greenBtn.addEventListener('click', () => addBlock('green'));
blueBtn.addEventListener('click', () => addBlock('blue'));
whiteBtn.addEventListener('click', () => addBlock('white'));
document.addEventListener('keydown', (e) => handleKeydown(e));

const themes = {
    white: {
        frameColor: 'black',
        bodyColor: 'white'
    },
    black: {
        frameColor: 'white',
        bodyColor: 'black'
    },
    red: {
        frameColor: '#FC6042',
        bodyColor: '#610101'
    },
    green: {
        frameColor: '#2CC990',
        bodyColor: '#1E453E'
    },
    blue: {
        frameColor: '#2C82C9',
        bodyColor: '#011F4B'
    },
    pink: {
        frameColor: '#F2629C',
        bodyColor: '#541B3D'
    },
    yellow: {
        frameColor: '#CCB200',
        bodyColor: '#585229'
    }
}

let theme = 'black';

function changeTheme() {
    theme = {
        white: 'black',
        black: 'red',
        red: 'green',
        green: 'blue',
        blue: 'pink',
        pink: 'yellow',
        yellow: 'white'
    }[theme];

    body.style.backgroundColor = themes[theme].bodyColor;
    frame.style.backgroundColor = themes[theme].frameColor;

    if (theme === 'black' || theme === 'white') {
        gamepad.style.backgroundColor = theme;
        gamepad.style.border = `3px solid ${themes[theme].frameColor}`;

        frame.style.border = `1px solid ${themes[theme].frameColor}`;

        undoBtn.style.border = `2px solid ${themes[theme].frameColor}`;
        undoBtn.style.color = `${themes[theme].frameColor}`;

        clearBtn.style.border = `2px solid ${themes[theme].frameColor}`;
        clearBtn.style.color = `${themes[theme].frameColor}`;
    }
}

let frameColorIndex = 0;

function changeFrameColor() {
    frameColorIndex++;
    if (frameColorIndex === 6) frameColorIndex = 0;

    frame.style.backgroundColor = ['#49E2DE', '#6EE214', '#F2DB00', '#E400F2', '#001CF2', '#F21072'][frameColorIndex];
}

let blockArray = [];

function addBlock(blockColor) {
    frame.style.backgroundColor = themes[theme].frameColor;

    if (blockArray.length === 144) return 'Full frame';

    if (theme === 'black' || theme === 'white') {
        if (blockColor === themes[theme].frameColor) changeFrameColor();
    }
    else if (blockColor === theme) changeFrameColor();

    blockArray.push(`<div id="${blockColor}Block"></div>`);
    frame.innerHTML = blockArray.join('');
}

function del() {
    frame.style.backgroundColor = themes[theme].frameColor;

    if (blockArray.length === 0) return 'Empty frame';

    if (theme === 'black' || theme === 'white') {
        if (blockArray.pop().includes(themes[theme].frameColor)) changeFrameColor();
    }
    else if (blockArray.pop().includes(theme)) changeFrameColor();
    
    frame.innerHTML = blockArray.join('');
}

function reset() {
    frame.style.backgroundColor = themes[theme].frameColor;
    frame.innerHTML = '';
    blockArray = [];
}

function handleKeydown(event) {
    switch (event.key) {
        case 'Enter':
            changeTheme();
            break;
        case '1':
            addBlock('black');
            break;
        case '2':
            addBlock('red');
            break;
        case '3':
            addBlock('green');
            break;
        case '4':
            addBlock('blue')
            break;
        case '5':
            addBlock('white');
            break;
        case 'Backspace':
            reset();
            break;
        case ' ':
            del();
            break;
    }
}