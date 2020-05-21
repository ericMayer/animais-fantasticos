export default function aberto() {
  const dias = document.querySelector("[data-semana");

  if (dias) {
    // pegando os dias da semana que está aberto, separando em uma lista e usando o map para retornar o valor convertido para número
    const diasLista = dias.dataset.semana.split(",").map(Number);
    const horarioLista = dias.dataset.horario.split(",").map(Number);

    const data = new Date(); // data atual

    const dia = data.getDay(); // dia de hoje
    const minutos = data.getMinutes(); // quantidade de minutos

    const horario = data.getUTCHours() - 3; // pegando horário da máquina e diminuindo -3 para o horário de brasília

    const horarioAtual = `${horario}.${minutos}`; // criando um valor do horário atual para que seja convertido na hora exata para comparação

    // verificando se a data e horário estão corretos
    if (
      diasLista.indexOf(dia) &&
      +horarioAtual >= horarioLista[0] &&
      +horarioAtual <= horarioLista[1]
    ) {
      dias.classList.add("aberto"); // adicionando classe aberto
    } else {
      dias.classList.add("fechado"); // adicionando classe fechado
    }
  }
}
