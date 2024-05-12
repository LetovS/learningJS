let result = ''
const table = document.getElementById('table')
function set (value){
    if(value === 'C' || value === '='){
        if (value === 'C'){
            table.value = '0'
            return
        }
        const param = result.split(' ')
        const par1 = parseInt(param[0])
        const par2 = parseInt(param[2])
        console.log(par1);console.log(par2);
        switch(param[1]){
            case '+':
                result = par1 + par2;
                break
            case '-':
                result = par1 - par2;
                break
            case '*':
                result = par1 * par2;
                break
            case '/':
                result = par1 / par2;
                break
        }
        table.value = result
        result = ''
    }
    else if(value === '+' ||
        value === '-' ||
        value === '*' ||
        value === '/'){
        result += value + ' '
        table.value = result
    }
    else{
        table.value = ''
        result += value + ' '
        table.value = result
    }

    console.log(value)
}