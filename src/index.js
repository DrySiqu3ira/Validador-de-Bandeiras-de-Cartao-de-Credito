function validarCartaoCredito(numeroCartao) {
  const bandeiras = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    "Visa 16 dígitos": /^4[0-9]{15}$/,
    Mastercard: /^5[1-5][0-9]{14}$/,
    "American Express": /^3[47][0-9]{13}$/,
    Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    "Diners Club": /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
    Voyager: /^8699[0-9]{11}$/,
    EnRoute: /^(2014|2149)\d{11}$/,
    HiperCard: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
    Aura: /^50[0-9]{14,17}$/,
  };

  for (let bandeira in bandeiras) {
    if (bandeiras[bandeira].test(numeroCartao.replace(/\s+/g, ""))) {
      return bandeira;
    }
  }

  return "Bandeira desconhecida";
}

// Exemplo de uso
const numeroCartao = "5030158746409167";
const bandeira = validarCartaoCredito(numeroCartao);
console.log(`A bandeira do cartão é: ${bandeira}`);
