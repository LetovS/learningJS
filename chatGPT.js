function checkWinner() {
    const cells = document.getElementsByClassName('grid-item');

    // Массив, содержащий состояние каждой клетки (x, o или пусто)
    const cellStates = Array.from(cells).map(cell => cell.innerText.trim());

    // Массив возможных комбинаций, которые могут привести к победе
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // горизонтальные
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // вертикальные
        [0, 4, 8], [2, 4, 6]              // диагональные
    ];

    // Проверяем каждую комбинацию, чтобы узнать, есть ли победитель
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cellStates[a] && cellStates[a] === cellStates[b] && cellStates[a] === cellStates[c]) {
            return cellStates[a]; // Возвращаем символ победителя (x или o)
        }
    }

    // Если нет победителя
    return null;
}

function set(btn) {
    if (!btn.disabled) {
        const playerSymbol = player ? 'x' : 'o';
        btn.innerText = playerSymbol;
        btn.style.color = player ? 'black' : 'white';
        btn.style.backgroundColor = player ? 'white' : 'black';
        btn.disabled = true;

        // Проверяем, есть ли победитель после каждого хода
        const winner = checkWinner();
        if (winner) {
            const wins = document.getElementById('wins');
            wins.innerText = `Победил игрок ${player ? '1 (x)' : '2 (o)'}`;
            // Здесь вы можете выполнить любые дополнительные действия после завершения игры
        } else {
            // Переключаем игрока
            player = !player;
        }
    }
}
