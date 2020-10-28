import React from 'react';
import {
  Box,
  Typography,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface PageHeaderProps {
  title: string,
  subtitle?: string
  children?: React.ReactNode
}

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxSubtitle: {
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
}));

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const classes = useStyles()
  const { title, subtitle, children } = props
  return (
    <React.Fragment>
      <Box className={classes.box}>
        <Box className={classes.boxSubtitle}>
          <Typography className={classes.title}>
            {title}
          </Typography>
          {subtitle &&
            <Typography className={classes.subtitle}>
              {subtitle}
            </Typography>}
        </Box>
        {children}
      </Box>
      <Divider className={classes.divider} />
    </React.Fragment>
  )

};

export default PageHeader;
