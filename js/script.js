// "use strict";

// Importando modules

import nav from "./modules/nav-link-interno.js";
import animais from "./modules/animais-conteudo.js";
import FaqAccordion from "./modules/faq-lista.js";
import scroll from "./modules/scroll-conteudo.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import dropdown from "./modules/dropdown-menu.js";
import menuMobile from "./modules/menu-mobile.js";
import aberto from "./modules/horario.js";
import animaisFetch from "./modules/animais-fetch.js";
import bitcoin from "./modules/bitcoin-fetch.js";

// Execução incial das funções
const eventos = ["click", "touchstart"];

nav();
animais();

const faq = new FaqAccordion('[data-anime="faq"] dt', eventos);
faq.iniciar();

scroll();
initModal();
initTooltip();
dropdown();
menuMobile();
aberto();
animaisFetch();
bitcoin();
