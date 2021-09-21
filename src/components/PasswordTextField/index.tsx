import React, { useState } from 'react'

import { TextField, IconButton, InputAdornment } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
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

const PasswordTextField = ({ name, validationErrors, ...rest }) => {
  const [isVisible, switchVisible] = useState(false)
  const handleClickShowPassword = () => {
    switchVisible(!isVisible)
  }

  const mensagemDeErro = obterErro(name, validationErrors)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  return <React.Fragment><TextField
    type={isVisible ? 'text' : 'password'}
    InputProps={{
      endAdornment: < InputAdornment position="end" >
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
        >
          {isVisible ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment >
    }}
    {...rest}></TextField >
    {mensagemDeErro && <ErrorMessage error={mensagemDeErro} />}
  </React.Fragment>
}

export default PasswordTextField
