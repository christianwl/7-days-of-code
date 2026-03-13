const DEFAULT_VALUES = [
  { numeroUm: 1, stringUm: "1" },
  { numeroTrinta: 30, stringTrinta: "30" },
  { numeroDez: 10, stringDez: 10 },
];

export function showDay1() {
  DEFAULT_VALUES.forEach((obj) => alert(compareVars(obj)));
}

function compareVars(obj = {}) {
  const entries = Object.entries(obj);
  if (entries.length < 2) return "Objeto insuficiente para comparação";

  const [nome1, valor1] = entries[0];
  const [nome2, valor2] = entries[1];

  let resultText = `Resultado da comparação das variáveis:\n[ ${nome1} ] e [ ${nome2} ]\n`;

  const hasSameValue = valor1 == valor2;
  resultText += `\n${hasSameValue ? "" : "não "}tem o mesmo valor`;

  if (hasSameValue) {
    const hasSameType = valor1 === valor2;
    resultText += hasSameType ? " e mesmo tipo" : ", mas tipos diferentes";
  }

  return resultText;
}
