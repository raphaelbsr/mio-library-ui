import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import { Box, Divider, Typography } from '@material-ui/core'

interface ContentDivider {
  /**
   * Título da seção
   */
  title?: string,
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
}


const ContentDivider: React.FC<ContentDivider> = ({
  title,
  top,
  right,
  bottom,
  left }) => {

  const useStyles = makeStyles((theme) => ({
    box: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingTop: theme.spacing(top),
      paddingRight: theme.spacing(right),
      paddingBottom: theme.spacing(bottom),
      paddingLeft: theme.spacing(left),
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

  const classes = useStyles();
  return <Box className={classes.box}>
    {title && <Typography className={classes.title} variant="h6" component="h6">{title}</Typography>}
    <Divider className={classes.divider} />
  </Box>
};

ContentDivider.defaultProps = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}
export default ContentDivider;
