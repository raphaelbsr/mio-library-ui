import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import { Box, Divider, Typography } from '@material-ui/core'

interface ContentDivider {
  title?: string
}

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    display: "block",
    color: "#999",
  },
  divider: {
    flex: 1,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}))

const ContentDivider: React.FC<ContentDivider> = ({ title }) => {
  const classes = useStyles();
  return <Box className={classes.box}>
    {title && <Typography className={classes.title} variant="h6" component="h6">{title}</Typography>}
    <Divider className={classes.divider} />
  </Box>
};

export default ContentDivider;
