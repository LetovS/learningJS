let count = 0

function add(){
    const p = document.getElementById('add')
    if (p.innerText === 'Add to cart'){
        p.innerText = 'Added'
        p.style.backgroundColor = 'green'
    }
    else{
        p.innerText = 'Add to cart'
        p.style.backgroundColor = 'greenyellow'
    }

    const v = document.getElementById('count')
    v.value = ++count
}

