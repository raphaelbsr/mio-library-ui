import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

interface ButtonBoxProps {
  children: React.ReactNode,
  top?: number,
  right?: number,
  bottom?: number,
  left?: number,
  buttonsWidth?: number | string,
}

const ButtonBox: React.FC<ButtonBoxProps> = ({
  buttonsWidth,
  children,
  top,
  right,
  bottom,
  left }) => {

  const useStyles = makeStyles(theme => ({
    box: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingTop: theme.spacing(top),
      paddingRight: theme.spacing(right),
      paddingBottom: theme.spacing(bottom),
      paddingLeft: theme.spacing(left),
      '& > * ': {
        marginLeft: theme.spacing(1),
        width: buttonsWidth
      }
    }
  }))

  const classes = useStyles()
  return <Box className={classes.box}>
    {children}
  </Box>
};

ButtonBox.defaultProps = {
  buttonsWidth: "auto",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}

export default ButtonBox;
