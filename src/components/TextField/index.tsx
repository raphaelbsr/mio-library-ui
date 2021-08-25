import React from 'react'
import { TextField as MuiTextField } from '@material-ui/core'
import ErrorMessage from "../ErrorMessage";

const obterErro = (name, validationErrors) => {
  if (!validationErrors) return false

  const { inner } = validationErrors
  if (!inner) return false
  const erroEncontrado = inner.find((item) => {
    const { path } = item
    return name === path
  })

  if (!erroEncontrado) return false

  return erroEncontrado.message
}

const TextField = ({ name, validationErrors, onChange, onlyNumber, separator, ref, ...rest }) => {
  const mensagemDeErro = obterErro(name, validationErrors)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (onlyNumber) {
      const newValue = e.target.value
      e.target.value = newValue.replace(new RegExp(`[^0-9${separator}]`, 'g'), '')
    }
    onChange(e)

  }

  return (
    <React.Fragment>
      <MuiTextField name={name} onChange={handleChange} {...rest}>
      </MuiTextField>
      {mensagemDeErro && <ErrorMessage error={mensagemDeErro} />}
    </React.Fragment>
  )
}

TextField.defaultProps = {
  onlyNumber: false,
  separator: ""
}

export default TextField
