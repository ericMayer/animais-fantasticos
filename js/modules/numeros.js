export default function initNumeros() {
  const quant = document.querySelectorAll('[data-numero="quantidade"]');
  let stalker; // criando um observador

  const animacao = () => {
    quant.forEach((numero) => {
      const total = +numero.innerText; // pegando texto do span e convertendo para número
      const aux = Math.floor(total / 100); // variavel auxiliar para somar no contador para que seja mais rápido a somda dos números

      let cont = 0;

      const tempo = setInterval(() => {
        cont += aux; // somando o contador
        numero.innerText = cont; // atribuindo cont ao texto do número

        if (cont > total) {
          // caso for maior que número significa que terminou a animação

          numero.innerText = total; // definindo o número original como o valor do texto, pois como está somando bem rápido passa do número correto
          clearInterval(tempo);
        }
      }, Math.random() * 50); // tempo será aletório
    });
  };

  const modeStalker = (stalkeado) => {
    // stalkeado é um array like parecido com o event, onde usuaremos o target para ver se a section já possui a classe ativo, assim irá começar a animação dos número
    if (stalkeado[0].target.classList.contains("ativo")) {
      stalker.disconnect(); // desligado modo stalker
      animacao(); // chamando função para animar os números
    }
  };

  stalker = new MutationObserver(modeStalker);

  if (quant) {
    // se for true, se a lista não for vazia será true

    const stalkerTarget = document.querySelector(".quantidade"); // selecionando o alvo que será observado

    stalker.observe(stalkerTarget, { attributes: true }); // definindo alvo para observar e o que será observador
  }
}
