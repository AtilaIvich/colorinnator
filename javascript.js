const body = document.body;
const gamepad = document.getElementById('gamepad');
const frame = document.getElementById('frame');

const blackBtn = document.getElementById('blackBtn');
const redBtn = document.getElementById('redBtn');
const greenBtn = document.getElementById('greenBtn');
const blueBtn = document.getElementById('blueBtn');
const whiteBtn = document.getElementById('whiteBtn');

const clearBtn = document.getElementById('clearBtn');
const undoBtn = document.getElementById('undoBtn');

frame.addEventListener('click', changeTheme);
clearBtn.addEventListener('click', reset);
undoBtn.addEventListener('click', del);

blackBtn.addEventListener('click', () => addBlock('black'));
redBtn.addEventListener('click', () => addBlock('red'));
greenBtn.addEventListener('click', () => addBlock('green'));
blueBtn.addEventListener('click', () => addBlock('blue'));
whiteBtn.addEventListener('click', () => addBlock('white'));
document.addEventListener('keydown', (e) => handleKeydown(e));

const themes = {
    white: {
        primaryColor: 'white',
        secondaryColor: 'black'
    },
    black: {
        primaryColor: 'black',
        secondaryColor: 'white'
    },
    red: {
        primaryColor: '#610101',
        secondaryColor: '#FC6042'
    },
    green: {
        primaryColor: '#1E453E',
        secondaryColor: '#2CC990'
    },
    blue: {
        primaryColor: '#011F4B',
        secondaryColor: '#2C82C9'
    },
    pink: {
        primaryColor: '#541B3D',
        secondaryColor: '#F2629C'
    },
    yellow: {
        primaryColor: '#585229',
        secondaryColor: '#CCB200'
    }
}

let theme = 'black';
const opposite = theme === 'white'? 'black' : 'white';

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

    body.style.backgroundColor = themes[theme].primaryColor;
    frame.style.backgroundColor = themes[theme].secondaryColor;

    if (theme === 'white') {
        gamepad.style.backgroundColor = 'white';
        gamepad.style.border = `3px solid black`;
        frame.style.border = `1px solid black`;
        clearBtn.style.border = `2px solid black`;
        clearBtn.style.color = `black`;
        undoBtn.style.border = `2px solid black`;
        undoBtn.style.color = `black`;
    }
    else if (theme === 'black') {
        gamepad.style.backgroundColor = 'black';
        gamepad.style.border = `3px solid white`;
        frame.style.border = `1px solid white`;
        clearBtn.style.border = `2px solid white`;
        clearBtn.style.color = `white`;
        undoBtn.style.border = `2px solid white`;
        undoBtn.style.color = `white`;
    }
}

let frameColor = 0;

function changeFrameColor() {
    frameColor++;
    if (frameColor === 6) frameColor = 0;

    frame.style.backgroundColor = ['#49E2DE', '#6EE214', '#F2DB00', '#E400F2', '#001CF2', '#F21072'][frameColor];
}

let blockArray = [];

function addBlock(block) {
    frame.style.backgroundColor = themes[theme].secondaryColor;

    if (theme === 'black' || theme === 'white') {
        if (opposite === block) changeFrameColor();
    }
    else if (theme === block) changeFrameColor();

    blockArray.push(`<div id="${block}Block"></div>`);
    frame.innerHTML = blockArray.join('');
}

function reset() {
    frame.innerHTML = '';
    blockArray = [];
}

function del() {
    if (blockArray.length === 0) return 'Empty frame.';

    if (theme === 'black' || theme === 'white') {
        if (blockArray.pop().includes(opposite)) changeFrameColor();
    }
    else {
        if (blockArray.pop().includes(theme)) changeFrameColor();
    }
    
    frame.innerHTML = blockArray.join('');
}

function handleKeydown(event) {
    switch (event.key) {
        case 'Enter': changeTheme();
        break;
        case '1': addBlock('black');
        break;
        case '2': addBlock('red')
        break;
        case '3': addBlock('green')
        break;
        case '4': addBlock('blue')
        break;
        case '5': addBlock('white')
        break;
        case 'Backspace': reset();
        break;
        case ' ': del();
        break;
    }
}