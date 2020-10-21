import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core'

interface ContentContainerProps {
  children: React.ReactNode
}

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    padding: theme.spacing(2)
  }
}))

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.contentContainer}>
    {children}
  </Box>;
}

export default ContentContainer;
