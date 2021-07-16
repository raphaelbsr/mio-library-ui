import React from 'react';
import { Box, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'

interface ButtonBoxProps {
  children: React.ReactNode,
  /**
   * Espaçamento do top
   * paddingTop
   */
  top?: number,
  /**
   * Espaçamento da margem direita
   * paddingRight
   */
  right?: number,
  /**
   * Espaçamento inferior
   * paddingBottom
   */
  bottom?: number,
  /**
   * Espaçamento da margem esquerda
   * paddingLeft
   */
  left?: number,
  /**
   * Tamanho da largura que os botão irão ter,
   * O valor padrão é "auto"
   */
  buttonsWidth?: number | string,
  /**
   * Espaçamento entre os botões
   */
  spacing?: number,
  /**
   * alinhamento horizontal
   */
  justifyContent?: string
}

const useStyles = makeStyles<Theme, ButtonBoxProps>(theme => ({
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: props => props.justifyContent,
    paddingTop: props => theme.spacing(props.top),
    paddingRight: props => theme.spacing(props.right),
    paddingBottom: props => theme.spacing(props.bottom),
    paddingLeft: props => theme.spacing(props.left),
    '& > * ': {
      marginLeft: props => theme.spacing(props.spacing),
      width: props => props.buttonsWidth
    }
  }
}))

const ButtonBox: React.FC<ButtonBoxProps> = (props) => {
  const { children } = props
  const classes = useStyles(props)
  return <Box className={classes.box}>
    {children}
  </Box>
};

ButtonBox.defaultProps = {
  buttonsWidth: "auto",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  spacing: 1,
  justifyContent: 'flex-end'
}

export default ButtonBox;
