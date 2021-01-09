import React from 'react'
import { TextField as MuiTextField } from '@material-ui/core'
import ErrorMessage from "../ErrorMessage";

const obterErro = (name, validationErrors) => {
  if (!validationErrors) return false

  const { inner } = validationErrors
  const erroEncontrado = inner.find((item) => {
    const { path } = item
    return name === path
  })

  if (!erroEncontrado) return false

  return erroEncontrado.message
}

const TextField = ({ name, validationErrors, ref, ...rest }) => {
  const mensagemDeErro = obterErro(name, validationErrors)
  return (
    <React.Fragment>
      <MuiTextField name={name} {...rest}>        
      </MuiTextField>
      {mensagemDeErro && <ErrorMessage error={mensagemDeErro} />}
    </React.Fragment>
  )
}

export default TextField
