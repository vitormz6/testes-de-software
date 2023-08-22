const express = require("express");
const { somar, subtrair, multiplicar, dividir } = require("./calculadora.js");
const app = express();
const porta = 3000;

app.get("/rota", (requisicao, resposta) => {
  const respostaDaSoma = somar(2, 3);
  const respostaDaSub = subtrair(10, 5);
  const respostaDaMult = multiplicar(5, 3);
  const respostaDaDiv = dividir(10, 5);
  //resposta.send("Hello World!")
  resposta.send(
    "A resposta dos calculos são: " +
      respostaDaSoma +
      " " +
      respostaDaSub +
      " " +
      respostaDaMult +
      " " +
      respostaDaDiv
  );
});

app.listen(porta, () => {
  console.log("Opa, nosso servidor levantou" + porta);
});
