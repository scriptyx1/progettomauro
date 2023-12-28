"use strict";

const normaleButton = document.querySelector(".normale");
const superButton = document.querySelector(".super");
const extraButton = document.querySelector(".extra");
const calcolaButton = document.querySelector(".calcola");
const plusButton = document.querySelector(".plus");
const daMostrare = document.querySelector(".daAccendere");
const risultatoText = document.querySelector(".risultato");

const inputBase = document.querySelector(".input-base");
const inputAlt = document.querySelector(".input-alt");

/////////////

let base, alt, basecm2, basem2;

const calcola = function (base, alt, tipo) {
  calcolaButton.addEventListener("click", function (e) {
    e.preventDefault();
    basecm2 = base * alt;
    basem2 = basecm2 / 10000;
    if (basem2 < 1) {
      tipo = tipo + tipo * 0.5;
    } else if (basem2 <= 2 && basem2 >= 1) {
      tipo = tipo + tipo * 0.3;
    }
    risultatoText.style.opacity = 100;
    risultatoText.textContent = `${(basem2 * tipo).toFixed(2)}€`;
  });
};

normaleButton.addEventListener("click", function (e) {
  e.preventDefault();
  risultatoText.style.opacity = 0;
  const tipoNormale = 30;
  base = Number(inputBase.value);
  alt = Number(inputAlt.value);
  calcola(base, alt, tipoNormale);
  daMostrare.style.opacity = 100;
});

superButton.addEventListener("click", function (e) {
  e.preventDefault();
  risultatoText.style.opacity = 0;
  const tipoSuper = 40;
  base = Number(inputBase.value);
  alt = Number(inputAlt.value);
  calcola(base, alt, tipoSuper);
  daMostrare.style.opacity = 100;
});

extraButton.addEventListener("click", function (e) {
  e.preventDefault();
  risultatoText.style.opacity = 0;
  const tipoExtra = 50;
  base = Number(inputBase.value);
  alt = Number(inputAlt.value);
  calcola(base, alt, tipoExtra);
  daMostrare.style.opacity = 100;
});

plusButton.addEventListener("click", function (e) {
  e.preventDefault();
  risultatoText.style.opacity = 0;
  const tipoPlus = 60;
  base = Number(inputBase.value);
  alt = Number(inputAlt.value);
  calcola(base, alt, tipoPlus);
  daMostrare.style.opacity = 100;
});
