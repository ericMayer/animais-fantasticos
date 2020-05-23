import AnimacaoNumeros from "./numeros.js";

export default function animaisFetch() {
  const quantidade = document.querySelector(".quantidade-grid");

  const criaAnimal = (animal) => {
    const div = document.createElement("div");
    div.classList.add("quantidade-animal");
    div.innerHTML = `<h2> ${animal.especie} </h2> <span data-numero="quantidade"> ${animal.quantidade} </span>`;
    return div;
  };

  async function pegaDados(url) {
    try {
      // esperando o response da primeira promise e depois esperando o response da promise do json
      const animais = await (await fetch(url)).json();

      // chamando a função responsável por criar a div para cada animal
      animais.forEach((animal) => {
        const div = criaAnimal(animal);
        quantidade.appendChild(div);
      });

      const numeros = new AnimacaoNumeros(
        '[data-numero="quantidade"]',
        "ativo",
        ".quantidade"
      );

      // iniciando animação dos números depois de pegar do arquivo json
      numeros.iniciar();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  if (quantidade) {
    // criando mesmo html de animal que antes tinha sido feito, porém com javascript
    pegaDados("../../json/animais-api.json");
  }
}
