let player = true
let steps = 0
function  set(btn){
    btn.style.backgroundColor = player ? 'white' : 'black'
    btn.innerText = player ? 'x' : 'o'
    btn.style.color = player ? 'black' : 'white'
    btn.value = player ? '1' : '2'
    player = !player
    if (!btn.disabled){
        btn.disabled= !btn.disabled
    }

    //console.log(btn.value)

    if (steps === 2){
        //check
        const btns = document.querySelectorAll('button')
        for (let i = 0; i < btns.length; i++) {
            console.log(btns[i].value)
        }
        console.log('=======================')
    }

    // print result
    const wins = document.getElementById('wins')
    wins.innerText = player ? 'Игрок 1' : 'Игрок 2'
    player ? steps++ : steps
}


function check(){
    return true
}