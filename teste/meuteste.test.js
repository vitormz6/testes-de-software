const { somar, subtrair, multiplicar, dividir } = require("../calculadora");

describe("Iremos testar os calculos do nosso sistema", () => {
  it("Vai realizar a soma de dois numeros", () => {
    //teste de unidade
    expect(somar(5, 5)).toBe(10);
  });

  it("Vai realizar a subtração de dois numeros", () => {
    //teste de unidade
    expect(subtrair(5, 5)).toBe(0);
  });

  it("Vai realizar a multiplicação de dois numeros", () => {
    //teste de unidade
    expect(multiplicar(5, 5)).toBe(25);
  });

  it("Vai realizar a divisão de dois numeros", () => {
    //teste de unidade
    expect(dividir(5, 5)).toBe(1);
  });
});
