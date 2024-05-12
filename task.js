let count = 0;

function show() {
    console.log(`Товаров в корзине: ${count}`);
    set()
}

function add() {
    console.log(`Товаров в корзине: ${++count}`);
    set()
}

function addTwo() {
    count += 2;
    console.log(`Товаров в корзине: ${count}`);
    set()
}

function addThree() {
    count += 3;
    console.log(`Товаров в корзине: ${count}`);
    set()
}

function reset() {
    count = 0
    console.log(`Товаров в корзине: ${count}`)
    set()
}

function set() {
    const p = document.getElementById('show')
    p.innerText = count
}
