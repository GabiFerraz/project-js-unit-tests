/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

function returnUndefined(lista) {
  let listaPa = false;
  if (lista.length === 0 || typeof (lista) === 'string') {
    listaPa = true;
  }
  return listaPa;
}

const average = (lista) => {
  let soma = 0;
  if (returnUndefined(lista)) {
    return undefined;
  }
  for (let index = 0; index < lista.length; index += 1) {
    if (returnUndefined(lista[index])) {
      return undefined;
    }
    soma += lista[index];
  }
  return Math.round(soma / lista.length);
};

module.exports = average;
