import React, { useState } from 'react'

import { TextField, IconButton, InputAdornment } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

const PasswordTextField = (props: any) => {
  const [isVisible, switchVisible] = useState(false)
  const handleClickShowPassword = () => {
    switchVisible(!isVisible)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  return <TextField
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
    {...props}></TextField >
}

export default PasswordTextField
