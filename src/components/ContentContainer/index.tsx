import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
// import { BoxProps } from "@material-ui/core/Box";

import { Box } from '@material-ui/core'

interface ContentContainerProps {

}

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    padding: theme.spacing(2)
  }
}))

const ContentContainer: React.FC<ContentContainerProps> = ({ children, ...rest }) => {
  const classes = useStyles();
  return <Box className={classes.contentContainer} {...rest}>
    {children}
  </Box>;
}

export default ContentContainer;
