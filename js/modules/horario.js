export default class HorarioFuncionamento {
  constructor(dias) {
    this.dias = document.querySelector(dias);
  }

  dadosFuncionamento() {
    // pegando os dias da semana que está aberto, separando em uma lista e usando o map para retornar o valor convertido para número
    this.diasLista = this.dias.dataset.semana.split(",").map(Number);
    this.horarioLista = this.dias.dataset.horario.split(",").map(Number);
  }

  dadosAtuais() {
    this.data = new Date(); // data atual

    this.dia = this.data.getDay(); // dia de hoje
    this.minutos = this.data.getMinutes(); // quantidade de minutos
  }

  aberto() {
    const horario = this.data.getUTCHours() - 3; // pegando horário da máquina e diminuindo -3 para o horário de brasília

    const horarioAtual = `${horario}.${this.minutos}`; // criando um valor do horário atual para que seja convertido na hora exata para comparação

    // verifica se o horário atual é maior que o horário
    // de abertura da loja e se o
    // o horário atual é menor que o horário
    // de fechamento da loja,
    // caso for retorna true,
    // se não retorna false
    if (
      this.diasLista.indexOf(this.dia) &&
      +horarioAtual >= this.horarioLista[0] &&
      +horarioAtual <= this.horarioLista[1]
    ) {
      return true;
    }
    return false;
  }

  addClass() {
    // caso seja true o retorno do método aberto
    // será adicionado a classe aberto,
    // caso não será adicionado a classe fechado
    if (this.aberto()) {
      this.dias.classList.add("aberto"); // adicionando classe aberto
    } else {
      this.dias.classList.add("fechado"); // adicionando classe fechado
    }
  }

  // métodos necessários para o funcionamento do script
  ativaTudo() {
    this.dadosFuncionamento();
    this.dadosAtuais();
    this.addClass();
  }

  iniciar() {
    if (this.dias) {
      this.ativaTudo(); // iniciando todos os métodos necessários
    }
    return this; // retornando a referência do objeto
  }
}
