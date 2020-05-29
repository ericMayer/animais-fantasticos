import Nav from "./slide-nav.js";

const slide = new Nav('[data-slide="container"]', '[data-slide="slide"]');
slide.iniciar();
slide.opcoes('[data-slide="anterior"]', '[data-slide="proximo"');
slide.addControl('[data-slide="paginacao"]');
