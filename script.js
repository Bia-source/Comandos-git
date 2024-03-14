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
// // Pegar o container principal
const main = document.getElementsByTagName("main")[0];

// // Criar a estrutura do card 
function createCard(name, firstData, secondData, img) {
    // criar as tags que iremos utilizar
    const divContainer = document.createElement("div");
    const divInfos = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("h1");
    const firstInfo = document.createElement("p");
    const secondInfo = document.createElement("p");

    // alterar os valores
    title.innerHTML = name;
    image.src = img;
    firstInfo.innerText = `${firstData}🚀`;
    secondInfo.innerText = `${secondData}🔥`;

    // inserir classes para estilizacao 
    // setAttribute -> setar/inserir novo atributo em uma tag;
    divContainer.setAttribute("class", "card")
    divInfos.setAttribute("class", "infos");
    firstInfo.setAttribute("class", "firstInfo");
    secondInfo.setAttribute("class", "secondInfo");

    // adicionar os elementos criados no HTML
    divContainer.appendChild(image);
    divContainer.appendChild(title);
    divContainer.appendChild(divInfos);
    divInfos.appendChild(firstInfo);
    divInfos.appendChild(secondInfo);
    main.appendChild(divContainer);
}
}

// porque nao usar?
// porque quem chamar o result vai precisar chamar a funcao .json()
async function execute(){
   const result = await fetch
   ("https://api.punkapi.com/v2/beers/random");
   console.log(await result.json());
}

async function execute1(){
    const result = await fetch("https://api.punkapi.com/v2/beers/random")
    .then(res => res.json());
    console.log(result);
}
function teste(){
    // codando para o merge
  }
  
  function carrinho(){
      console.log("adicionando produtos no carrinho")
  }

async function execute2(){
    const result = (await fetch("https://api.punkapi.com/v2/beers/random")).json();
    console.log(await result);
}

function execute3(){
    fetch("https://api.punkapi.com/v2/beers/random")
    .then(res => res.json())
    .then(data => console.log(data));
}
