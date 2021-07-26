import React from 'react';
import { Box, Typography, Theme, Divider, makeStyles } from '@material-ui/core';

interface LabelValueProps {
  label: string,
  value?: string,
  valueComponent?: React.ReactElement
  direction?: 'horizontal' | 'vertical'
  alignItems?: string
  justifyContent?: string
  separator?: string,
  showSeparator?: boolean,
  showDivider?: boolean,
}

const useStyles = makeStyles<Theme, LabelValueProps>(theme => ({
  box: {
    display: 'flex',
    flexDirection: (props) =>
      props.direction === "horizontal" ? "row" : "column",
    alignItems: (props) => props.alignItems,
    justifyContent: (props) => props.justifyContent,
  },
  label: {
    fontWeight: "bolder",
    fontSize: "9pt",
  },
  value: {
    marginLeft: theme.spacing(0.5),
    fontSize: "10pt",
  }
}));

const LabelValue: React.FC<LabelValueProps> = (props) => {

  const { label, value, separator, showSeparator, showDivider } = props

  const classes = useStyles(props);
  return (
    <Box className={classes.box}>
      <Typography className={classes.label} variant="body2">
        {label}
        {showSeparator && separator}
      </Typography>
      {showDivider && <Divider style={{ flex: 1 }} />}
      <Typography className={classes.value} variant="body2">
        {value}
      </Typography>
      {/* <Typography
        className={classes.value}
        variant="subtitle1"
        component="span"
      >
        {valueComponent ? valueComponent : value}
      </Typography> */}
    </Box>
  );
};

LabelValue.defaultProps = {
  separator: ":",
  direction: "horizontal",
  alignItems: "flex-end",
  justifyContent: "flex-start",
  showSeparator: true,
  showDivider: false,
}

export default LabelValue;
