import React from 'react'

import { Button as MuiButton, CircularProgress } from '@material-ui/core'
// import { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';

interface ButtonProps {
  /**
   * Quando o valor for true, o texto do botão será substituído por uma barra de progresso para indicar que há um processamento em execução.
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
