
import { IValidation } from "components/MaskedTextField";
import { cpf, cnpj } from 'cpf-cnpj-validator';

export default function validarNumeroInscricao(numeroInscricao: string): IValidation {

  const numeroInscricaoParaValidar = numeroInscricao.replace(/\D/g, '')

  if (numeroInscricaoParaValidar.length === 11) {
    const cpfEhValido = cpf.isValid(numeroInscricaoParaValidar);
    return {
      ehValido: cpfEhValido,
      mensagemDeErro: !cpfEhValido ? 'O CPF informado não é válido' : null
    }
  }

  if (numeroInscricaoParaValidar.length === 14) {
    const cnpjEhValido = cnpj.isValid(numeroInscricaoParaValidar);
    return {
      ehValido: cnpjEhValido,
      mensagemDeErro: !cnpjEhValido ? 'O CNPJ informado não é válido' : null
    }
  }

  return {
    ehValido: false,
    mensagemDeErro: 'O valor deve conter 11 algarismos para CPF ou 14 algarismos para CNPJ '
  }

}
