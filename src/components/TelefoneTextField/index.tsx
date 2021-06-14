import React, { useState, useEffect, ReactFragment } from 'react';

import MaskedTextField from "../MaskedTextField";
import ErrorMessage from "../ErrorMessage";

interface TelefoneTextFieldProps extends React.InputHTMLAttributes<ReactFragment> {
  /**
   * O tipo do telefone define qual máscara será utilizada
   * FIXO utiliza a máscara (99) 9999-9999
   * CELULAR utiliza a máscara (99) 9 9999-9999
   * INDEFINIDO define automaticamente a máscara no momento em que o input recebe o valor
   */
  tipo?: TIPO_TELEFONE;
  validationErrors?: any;
  disabled?: boolean;
  value: string;
  // rest: any,
}

export enum TIPO_TELEFONE {
  INDEFINIDO = "INDEFINIDO",
  FIXO = "FIXO",
  CELULAR = "CELULAR"
}

export enum MASCARA {
  INTERMEDIARIA = "(99) 9999-99999",
  FIXO = "(99) 9999-9999",
  CELULAR = "(99) 9 9999-9999"
}

const obterErro = (name: string, validationErrors: any) => {

  if (!validationErrors)
    return false

  const { inner } = validationErrors
  if (!inner) return false
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

  const [mask, setMask] = useState<MASCARA>(MASCARA.FIXO);

  useEffect(() => {
    definirMascara(value)
  }, [tipo])

  const definirMascara = (telefone: string) => {

    if (tipo === TIPO_TELEFONE.FIXO) {
      setMask(MASCARA.FIXO)
      return
    }

    if (tipo === TIPO_TELEFONE.CELULAR) {
      setMask(MASCARA.CELULAR)
    }
  }

  const beforeMaskedValueChange = (newState: any, oldState: any, userInput: any) => {

    let selection = newState.selection;
    if (userInput) {
      let newStart = newState.selection.start;
      let oldStart = oldState.selection.start;

      if (newStart < 13 && mask !== MASCARA.FIXO) {
        setMask(MASCARA.FIXO)
      }

      if (newStart === 13 && oldStart === 12) {
        setMask(MASCARA.FIXO)
      }

      if (newStart === 14 && oldStart === 13) {
        setMask(MASCARA.INTERMEDIARIA)
      }

      if (newStart === 15 && oldStart === 14) {
        setMask(MASCARA.CELULAR)
        selection = { start: 16, end: 16 }
      }

    }
    const { value: nValue } = newState;
    return {
      value: nValue,
      selection
    };
  }

  const mensagemDeErro = obterErro(name, validationErrors);
  return <React.Fragment>
    <MaskedTextField
      ref={null}
      mask={mask}
      beforeMaskedValueChange={tipo === TIPO_TELEFONE.INDEFINIDO && beforeMaskedValueChange}
      value={value}
      onChange={onChange}
      {...rest}
    />
    {mensagemDeErro && <ErrorMessage error={mensagemDeErro} />}
  </React.Fragment>

};

TelefoneTextField.defaultProps = {
  disabled: false,
  tipo: TIPO_TELEFONE.INDEFINIDO
}

export default TelefoneTextField;
