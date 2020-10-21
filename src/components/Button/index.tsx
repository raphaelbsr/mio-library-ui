import React from 'react'

import { Button as MuiButton, CircularProgress } from '@material-ui/core'
// import { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';

interface ButtonProps {
  /**
   * Essa é uma descrição do Botao
   */
  isLoading: boolean,
}

const Button: React.FC<ButtonProps> = (props) => {
  const { isLoading, children, ...rest } = props
  return <MuiButton {...rest}>
    {isLoading
      ? <CircularProgress color="secondary" size={22}></CircularProgress>
      : children
    }
  </MuiButton >
}

Button.defaultProps = {
  isLoading: false
}

export default Button
