let contador = document.getElementById('contador');
let value = contador.value;

function add() {
    value++;

    contador.value = value;
    // console.log(contador.value);
}

function sub() {
    value--;
    contador.value = value;

    if (value < 0) {
        alert('O número não pode ser negativo!')
        value = 0;
        contador.value = value;
    }
}

function reset() {
    value = 0;
    contador.value = value;
}

