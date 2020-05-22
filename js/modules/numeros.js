export default class AnimacaoNumeros {
  constructor(quant, stalkeadoClass, stalkerTarget) {
    this.quant = document.querySelectorAll(quant);
    this.stalkeadoClass = stalkeadoClass;
    this.stalkerTarget = document.querySelector(stalkerTarget);

    this.modeStalker = this.modeStalker.bind(this); // alterando referência do método para a classe, pois será usado como callback
  }

  // let stalker; // criando um observador

  static incremento(numero) {
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
  }

  animacao() {
    this.quant.forEach((numero) => {
      this.constructor.incremento(numero); // para chamar uma função estática é necessário colocar a classe o this.constructor.nome do método
    });
  }

  modeStalker(stalkeado) {
    // stalkeado é um array like parecido com o event, onde usuaremos o target para ver se a section já possui a classe ativo, assim irá começar a animação dos número
    if (stalkeado[0].target.classList.contains(this.stalkeadoClass)) {
      this.stalker.disconnect(); // desligado modo stalker
      this.animacao(); // chamando função para animar os números
    }
  }

  addStalker() {
    this.stalker = new MutationObserver(this.modeStalker);

    this.stalker.observe(this.stalkerTarget, { attributes: true }); // definindo alvo para observar e o que será observador
  }

  iniciar() {
    // se for verdadeiro inicia mutation
    if (this.quant.length && this.stalkerTarget) {
      this.addStalker();
    }

    return this; // retornando referência da classe
  }
}
