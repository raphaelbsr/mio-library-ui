import React from 'react';
import {
  Box,
  Typography,
  Divider,
  IconButton
} from "@material-ui/core";
import { ArrowBack as BackIcon } from '@material-ui/icons'
import { makeStyles } from "@material-ui/core/styles";

interface PageHeaderProps {
  title: string
  subtitle?: string
  children?: React.FC
  onBack?: any
  renderRight?: any
}

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxTitleSubtitle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    display: "block",
    color: "#666",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "bolder",
    display: "block",
    color: "#AAA",
  },
  divider: {
    display: "block",
    height: 2,
    width: "100%",
    background: "#DDD",
    marginTop: theme.spacing(0.3),
    marginBottom: theme.spacing(2)

  },
  headerContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%'
  },
  rightContent: {}
}));

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const classes = useStyles()
  const { title, subtitle, children, onBack, renderRight } = props
  return (
    <React.Fragment>
      <Box className={classes.box}>
        <Box className={classes.headerContent}>
          <Box className={classes.leftContent}>

            {onBack && <Box>
              <IconButton size="small" onClick={onBack}>
                <BackIcon color="primary" />
              </IconButton>
            </Box>}

            <Box className={classes.boxTitleSubtitle}>
              <Typography className={classes.title}>
                {title}
              </Typography>
              {subtitle &&
                <Typography className={classes.subtitle}>
                  {subtitle}
                </Typography>}
            </Box>

          </Box>

          {renderRight && <Box className={classes.rightContent}>
            {renderRight}
          </Box>}
        </Box>
        {children}
      </Box>
      <Divider className={classes.divider} />
    </React.Fragment>
  )

};

export default PageHeader;
