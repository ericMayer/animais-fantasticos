export default function bitcoin() {
  const spanBitcoin = document.querySelector('[data-bitcoin="doacao"]');

  // será utilizado uma api de bitcoin para pegar o valor real de compra em bitcoin em BRL é exibir no navegador, a quantidade que desejamos que seja doada

  async function valor(url) {
    try {
      const preco = await (await fetch(url)).json();

      spanBitcoin.innerText = (100 / preco.BRL.buy).toFixed(4);
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  if (spanBitcoin) {
    valor("https://blockchain.info/ticker");
  }
}
