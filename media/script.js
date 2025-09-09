function media() {
    const numerosArray = []

    const addArray = document.getElementById('numeros')
    const botao = document.getElementById('botao')

    botao.addEventListener('click', function() {
        const inputValor = addArray.value

        if (inputValor.trim() !== '') {
            numerosArray.push(inputValor);

            inputValor.value = '';
        } else {
            alert('Porfavor insira um item..')
        }

    })
}