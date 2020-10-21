import React, { useState, useEffect, ReactFragment } from 'react';

import MaskedTextField from "../MaskedTextField";
import ErrorMessage from "../ErrorMessage";

enum TIPO_TELEFONE {
  TIPO_INDEFINIDO = "INDEFINIDO",
  TIPO_FIXO = "FIXO",
  TIPO_CELULAR = "CELULAR"
}

interface TelefoneTextFieldProps extends React.InputHTMLAttributes<ReactFragment> {
  tipo: TIPO_TELEFONE
  ddd: string,
  numero: string,
  validationErrors: any
}

const formatarTelefone = (numero: string) => {
  const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
  var str = numero.replace(/[^0-9]/g, "").slice(0, 10);
  return str.replace(regex, "($1) $2-$3");
}

const formatarCelular = (numero: string) => {
  const regex = /^([0-9]{2})([0-9]{1})([0-9]{4,5})([0-9]{4})$/;
  var str = numero.replace(/[^0-9]/g, "").slice(0, 11);
  return str.replace(regex, "($1) $2 $3-$4");
}

export const formatar = (numero: string) => {
  if (numero.length === 10) {
    return formatarTelefone(numero)
  }
  return formatarCelular(numero)
}

const obterErro = (name: string, validationErrors: any) => {

  if (!validationErrors)
    return false

  const { inner } = validationErrors
  const erroEncontrado = inner.find(item => {
    const { path } = item
    return name === path
  })

  if (!erroEncontrado)
    return false

  return erroEncontrado.message

}

const TelefoneTextField: React.FC<TelefoneTextFieldProps> = ({
  name,
  tipo,
  value,
  validationErrors,
  onChange,
  ...rest }) => {

  const [mask, setMask] = useState("(99) 9999-9999");

  useEffect(() => {
    const definirMascara = (telefone: string | number | readonly string[]) => {

      if (tipo === TIPO_TELEFONE.TIPO_INDEFINIDO) {
        return
      }

      if (tipo === TIPO_TELEFONE.TIPO_FIXO) {
        setMask("(99) 9999-9999")
        return
      }

      if (tipo === TIPO_TELEFONE.TIPO_CELULAR) {
        setMask("(99) 9 9999-9999")
        return
      }

    }

    definirMascara(value)
  }, [value, tipo])

  const beforeMaskedValueChange = (newState: any, oldState: any, userInput: any) => {

    if (userInput) {
      let newStart = newState.selection.start;
      let oldStart = oldState.selection.start;
      if (newStart === 14 && oldStart === 13) {
        setMask("(99) 9 9999-9999")
      }
    }
    const { value: nValue } = newState;
    const selection = newState.selection;
    return {
      value: nValue,
      selection
    };

  }

  const mensagemDeErro = obterErro(name, validationErrors);
  return <React.Fragment>
    <MaskedTextField
      mask={mask}
      beforeMaskedValueChange={beforeMaskedValueChange}
      {...rest}
    />
    {mensagemDeErro && <ErrorMessage error={mensagemDeErro} />}
  </React.Fragment>

};

export default TelefoneTextField;
