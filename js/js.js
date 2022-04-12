let valor = document.querySelector('#add')
let time = document.querySelector('#time')
let data = document.querySelector('#data')
let res = document.querySelector('.res')
let array = [];

function adicionar(){
    if(valor.value == ''){
        alert('Valor invalido')
    }
    else{array.push(valor.value, data.value,time.value)
        let lista = array;
        res.innerHTML = lista;
        valor.value = ''
    }
    
}

function limpar(){
    array.splice(0)
    let lista = array;
    res.innerHTML = lista;
}