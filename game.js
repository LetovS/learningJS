let defaultColor = ''

function game(value) {
    const answer = document.getElementById('res');

    setColor(answer.style.background.toString())
    const btns = document.querySelectorAll('button');
    let pkAnswer = Math.floor(Math.random() * 3);

    const arr = ['Камень', 'Бумага', 'Ножницы'];
    const win = `Вы победили. У оппонента: ${arr[pkAnswer]}`;
    const lose = `Вы проиграли. У оппонента: ${arr[pkAnswer]}`;
    const draw = `Ничья. У оппонента: ${arr[pkAnswer]}`;

    clear(btns);

    const diff = (value - pkAnswer + 3) % 3; // чтобы получить положительное значение от 0 до 2

    for (let i = 0; i < diff; i++) {
        btns[i].style.backgroundColor = defaultColor;
    }

    btns[value].style.backgroundColor = diff === 0 ? 'orange' : diff === 1 ? 'green' : 'red';

    switch (diff) {
        case 0:
            console.log('ничья')
            break
        case 1:
            console.log('победы')
            break
        case 2:
            console.log('проиграл')
            break

    }
    if (diff === 0) {
        answer.value = draw;
        setTotalScore(30);
    } else if (diff === 1) {
        answer.value = win;
        setTotalScore(10);
    } else {
        answer.value = lose;
        setTotalScore(20);
    }
    // bad story
    // if (pkAnswer === 0) {
    //     if (ans === 0) {
    //         answer.value = draw
    //         setTotalScore(30);
    //     } else if (ans === 1) {
    //         answer.value = win
    //         setTotalScore(10);
    //     } else {
    //         answer.value = lose
    //         setTotalScore(20);
    //     }
    // } else if (pkAnswer === 1) {
    //     if (ans === 0) {
    //         answer.value = lose
    //         setTotalScore(20);
    //     } else if (ans === 1) {
    //         answer.value = draw
    //         setTotalScore(30);
    //     } else {
    //         answer.value = win
    //         setTotalScore(10);
    //     }
    // } else {
    //     if (ans === 0) {
    //         answer.value = win
    //         setTotalScore(10);
    //     } else if (ans === 1) {
    //         answer.value = lose
    //         setTotalScore(20);
    //     } else {
    //         answer.value = draw
    //         setTotalScore(30);
    //     }
    // }
}

let winCount = 0;
let loseCount = 0;
let drawCount = 0;

function setTotalScore(param) {
    const winId = document.getElementById('win');
    const loseId = document.getElementById('lose');
    const drawId = document.getElementById('draw');
    switch (param) {
        case 10:   // win
            winCount++;
            winId.innerText = winCount.toString();
            break;
        case 20:   // lose
            loseCount++;
            loseId.innerText = loseCount.toString();
            break;
        case 30:   // draw
            drawCount++;
            drawId.innerText = drawCount.toString();
            break;
    }
}

function clear(btns){
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = defaultColor;
    }
}

function setColor(value) {
    defaultColor = value;
}