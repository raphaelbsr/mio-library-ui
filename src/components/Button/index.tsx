import React from 'react'

import { Button as MuiButton, CircularProgress } from '@material-ui/core'
import { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';

interface ButtonProps extends MuiButtonProps {
  isLoading: boolean,
  children: React.ReactNode
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

export default Button
