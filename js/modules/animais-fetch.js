import AnimacaoNumeros from "./numeros.js";

export default function animaisFetch(element, url) {
  const quantidade = document.querySelector(element);

  // criando estrutura do animal que será adicionado no html
  const criaAnimal = (animal) => {
    const div = document.createElement("div");
    div.classList.add("quantidade-animal");
    div.innerHTML = `<h2> ${animal.especie} </h2> <span data-numero="quantidade"> ${animal.quantidade} </span>`;
    return div;
  };

  // adiciona o animal no DOM
  const adicionaAnimal = (animal) => {
    const div = criaAnimal(animal);
    quantidade.appendChild(div);
  };

  const animaAnimais = () => {
    const numeros = new AnimacaoNumeros(
      '[data-numero="quantidade"]',
      "ativo",
      ".quantidade"
    );

    // iniciando animação dos números depois de pegar do arquivo json
    numeros.iniciar();
  };

  const pegaDados = async () => {
    try {
      // esperando o response da primeira promise e depois esperando o response da promise do json
      const animais = await (await fetch(url)).json();

      // chamando a função responsável por criar a div para cada animal
      animais.forEach((animal) => {
        adicionaAnimal(animal);
      });
      animaAnimais(); // chamando função responsável por fazer a animação
    } catch (erro) {
      console.log(Error(erro));
    }
  };

  if (quantidade) {
    // ativando função para que seja o fetch
    return pegaDados();
  }
}
