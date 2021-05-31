import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import { Box, Divider, Typography, Tooltip } from '@material-ui/core'
import { Info as InfoIcon } from '@material-ui/icons'


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
  /**
   * Renderiza algum componente a direita do seperador
   *
   */
  renderRight?: any

  showTooltip?: boolean
  tooltipIcon?: any
  tooltipText?: string
  tooltipRenderer: any
}


const ContentDivider: React.FC<ContentDivider> = ({
  title,
  top,
  right,
  bottom,
  left,
  renderRight,
  showTooltip,
  tooltipIcon,
  tooltipText,
  tooltipRenderer }) => {

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
    {showTooltip && tooltipRenderer && tooltipRenderer}
    {showTooltip && !tooltipRenderer && <Tooltip title={tooltipText}>{tooltipIcon}</Tooltip>}
    {title && <Typography className={classes.title} variant="h6" component="h6">{title}</Typography>}
    <Divider className={classes.divider} />
    {renderRight}
  </Box>
};

ContentDivider.defaultProps = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  showTooltip: false,
  tooltipIcon: <InfoIcon fontSize="small" />,
}
export default ContentDivider;
