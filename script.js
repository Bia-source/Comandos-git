function somar(){
    return 2+3;
}

function timeoutCreateCard(){
    // 1. Retornar 3 coisas
    // 1.1 Um objeto
    // 1.2 Uma stringjson
    // 1.3 Apenas o valor da mensagem tudo em caixa alta 

    // 1.1 = {message: 'Hello World!'}
    // 1.2 = '{message: 'Hello World!'}'
    // 1.3 = 'HELLO WORLD!')
    fetch("https://loginvalidatorapi-mmwp.onrender.com/")
    .then(res => res.json())
    .then(data => {
        // console.log({message: 'Hello World!'})
        // console.log('{message: 'Hello World!'}')
        // console.log('HELLO WORLD!')
    })
}


function carrinho(){
    console.log("adicionando produtos no carrinho")
}

function produtos(){
    console.log("produtos")
}