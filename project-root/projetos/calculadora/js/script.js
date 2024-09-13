function insert(value) {
    document.getElementById('display').value += value;
}

function apagarUm() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}


function limparDisplay() {
    document.getElementById('display').value = '';
}

function calcular() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}