import React from 'react';

import { makeStyles } from '@material-ui/core';
import { Box, Divider, Typography, Tooltip, Theme } from '@material-ui/core'
import { Info as InfoIcon } from '@material-ui/icons'


interface IContentDivider {
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
  renderLeft?: any

  /**
   * Renderiza algum componente a direita do seperador
   *
   */
  renderRight?: any

  showDivider?: boolean

  showTooltip?: boolean
  tooltipIcon?: any
  tooltipText?: string
  tooltipRenderer: any,
  titleProps?: any
}

const useStyles = makeStyles<Theme, IContentDivider>(theme => ({
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: props => theme.spacing(props.top),
    paddingRight: props => theme.spacing(props.right),
    paddingBottom: props => theme.spacing(props.bottom),
    paddingLeft: props => theme.spacing(props.left),
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    display: "block",
    color: "#666666",
  },
  divider: {
    flex: 1,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}))

const ContentDivider: React.FC<IContentDivider> = (props) => {
  const {
    title,
    renderRight,
    renderLeft,
    showTooltip,
    tooltipIcon,
    tooltipText,
    tooltipRenderer,
    showDivider,
    titleProps
  } = props
  const classes = useStyles(props);
  return <Box className={classes.box}>
    {renderLeft}
    {showTooltip && tooltipRenderer && tooltipRenderer}
    {showTooltip && !tooltipRenderer && <Tooltip title={tooltipText}>{tooltipIcon}</Tooltip>}
    {title && <Typography className={classes.title} variant="h6" component="h6" {...titleProps}>{title}</Typography>}
    {
      showDivider && <Divider className={classes.divider} />
    }

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
  showDivider: true,
  titleProps: {}
}
export default ContentDivider;
