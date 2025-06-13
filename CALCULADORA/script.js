function add() {
    var num1 = parseFloat(document.getElementById('valor1').value);
    var num2 = parseFloat(document.getElementById('valor2').value);
    var num3 = parseFloat(document.getElementById('valor3').value);
    var saida = document.getElementById('saida');

    saida.textContent = `A soma dos números ${num1}, ${num2} e ${num3} é ${num1 + num2 + num3}`

}

function sub() {
    var num1 = parseFloat(document.getElementById('valor1').value);
    var num2 = parseFloat(document.getElementById('valor2').value);
    var num3 = parseFloat(document.getElementById('valor3').value);
    var saida = document.getElementById('saida');

    saida.textContent = `A subtração dos números ${num1}, ${num2} e ${num3} é ${num1 - num2 - num3}`

}

function mult() {
    var num1 = parseFloat(document.getElementById('valor1').value);
    var num2 = parseFloat(document.getElementById('valor2').value);
    var num3 = parseFloat(document.getElementById('valor3').value);
    var saida = document.getElementById('saida');

    saida.textContent = `A multiplicação dos números ${num1}, ${num2} e ${num3} é ${num1 * num2 * num3}`

}

function div() {
    var num1 = parseFloat(document.getElementById('valor1').value);
    var num2 = parseFloat(document.getElementById('valor2').value);
    var num3 = parseFloat(document.getElementById('valor3').value);
    var saida = document.getElementById('saida');

    saida.textContent = `A divisão dos números ${num1}, ${num2} e ${num3} é ${num1 / num2 / num3}`

}

function med() {
    var num1 = parseFloat(document.getElementById('valor1').value);
    var num2 = parseFloat(document.getElementById('valor2').value);
    var num3 = parseFloat(document.getElementById('valor3').value);
    var saida = document.getElementById('saida');

    saida.textContent = `A média dos números ${num1}, ${num2} e ${num3} é ${(num1 + num2 + num3)/3}`

}

function moda() {
    var num1 = parseFloat(document.getElementById('valor1').value);
    var num2 = parseFloat(document.getElementById('valor2').value);
    var num3 = parseFloat(document.getElementById('valor3').value);
    var saida = document.getElementById('saida');

    if (num1 == num2 || num1 == num3) {
        saida.textContent = `A moda desses números é ${num1}`
    } else if (num2 == num1 || num2 == num3) {
        saida.textContent = `A moda desses números é ${num2}`
    } else if (num3 == num2 || num3 == num1) {
        saida.textContent = `A moda desses números é ${num3}`
    } else {
        saida.textContent = "Não tem moda entre esses números"
    }

}