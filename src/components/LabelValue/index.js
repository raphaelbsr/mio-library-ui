import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const LabelValue = ({ label, value, valueComponent }) => {
  const useStyles = makeStyles(theme => ({
    box: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    label: {
      paddingRight: theme.spacing(1)
      //fontWeight: 'bolder'
    },
    value: {
      // padding: theme.spacing(2)
    }
  }));

  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Typography
        className={classes.label}
        variant="subtitle1"
        component="span"
      >
        {label}:
      </Typography>
      <Typography
        className={classes.value}
        variant="subtitle1"
        component="span"
      >
        {valueComponent ? valueComponent : value}
      </Typography>
    </Box>
  );
};

export default LabelValue;
