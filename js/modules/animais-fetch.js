import initNumeros from "./numeros.js";

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
    initNumeros(); // iniciando animação dos números depois de pegar do arquivo json
  };

  const pegaDados = async () => {
    try {
      // esperando o response da primeira promise e depois esperando o response da promise do json
      const animais = await (await fetch(url)).json();

      // chamando a função responsável por criar a div para cada animal
      animais.forEach((animal) => {
        adicionaAnimal(animal);
      });
      // chamando função responsável por chamar a animação dos números
      animaAnimais();
    } catch (erro) {
      console.log(Error(erro));
    }
  };

  if (quantidade) {
    // ativando função para que seja o fetch
    return pegaDados();
  }
}
