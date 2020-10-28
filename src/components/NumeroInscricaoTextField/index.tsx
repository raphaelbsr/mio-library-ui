import React, { useState, useEffect } from 'react';

import MaskedTextField, { IValidation } from "../MaskedTextField";
import ErrorMessage from "../ErrorMessage";
import { cpf, cnpj } from 'cpf-cnpj-validator';

interface NumeroInscricaoTextFieldProps extends React.InputHTMLAttributes<React.ReactFragment> {
  disabled?: boolean;
  ehValido?: boolean;
  mensagemDeErro?: string;
  value?: string;
  tipo?: TIPO_DOCUMENTO;
  // rest: any,
}

export enum TIPO_DOCUMENTO {
  INDEFINIDO = "INDEFINIDO",
  CPF = "CPF",
  CNPJ = "CNPJ"
}

export enum MASCARA {
  INTERMEDIARIA = "999.999.999-999",
  CPF = "999.999.999-99",
  CNPJ = "99.999.999/9999-99"
}

export const isValid = (numeroInscricao: string): IValidation => {

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

const NumeroInscricaoTextField: React.FC<NumeroInscricaoTextFieldProps> = (
  {
    ehValido,
    mensagemDeErro,
    tipo,
    value,
    ...rest }) => {

  const [mask, setMask] = useState("999.999.999-99");
  const [validacao, setValidacao] = useState({
    ehValido: true,
    mensagemDeErro: ''
  })

  useEffect(() => {
    definirMascara(value)
  }, [tipo])

  // useEffect(() => {
  //   validarNumeroInscricao(value)
  // }, [value])

  const definirMascara = (numeroInscricao: string) => {

    if (tipo === TIPO_DOCUMENTO.CPF) {
      setMask(MASCARA.CPF)
      return
    }

    if (tipo === TIPO_DOCUMENTO.CNPJ) {
      setMask(MASCARA.CNPJ)
      return
    }

  }

  const validarNumeroInscricao = (numeroInscricao: string) => {
    const result = isValid(numeroInscricao);
    if (!result.ehValido) {
      setValidacao(result)
      return
    }
    setValidacao({
      ehValido: true,
      mensagemDeErro: ''
    })
  }

  const beforeMaskedValueChange = (newState: any, oldState: any, userInput: any) => {

    let selection = newState.selection;
    if (userInput) {
      let newStart = newState.selection.start;
      let oldStart = oldState.selection.start;
      if (newStart < 13 && mask !== MASCARA.CPF) {
        setMask(MASCARA.CPF)
      }

      if (newStart === 13 && oldStart === 12) {
        setMask(MASCARA.CPF)
      }

      if (newStart === 14 && oldStart === 13) {
        setMask(MASCARA.INTERMEDIARIA)
      }

      if (newStart === 15 && oldStart === 14) {
        setMask(MASCARA.CNPJ)
      }
    }
    const { value } = newState;
    return {
      value,
      selection
    };
  }

  return (
    <React.Fragment>
      <MaskedTextField
        mask={mask}
        value={value}
        onBlur={(e) => {
          validarNumeroInscricao(e.target.value)
        }}
        beforeMaskedValueChange={tipo === TIPO_DOCUMENTO.INDEFINIDO && beforeMaskedValueChange}
        {...rest}
      />
      {!validacao.ehValido && <ErrorMessage error={validacao.mensagemDeErro} />}
    </React.Fragment>
  )
};


NumeroInscricaoTextField.defaultProps = {
  disabled: false,
  ehValido: true,
  mensagemDeErro: undefined,
  tipo: TIPO_DOCUMENTO.INDEFINIDO
}

export default NumeroInscricaoTextField;
