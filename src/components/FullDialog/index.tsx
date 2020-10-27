import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { TransitionProps } from '@material-ui/core/transitions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

interface FullDialogProps {
  isOpen: boolean,
  onClose: any,
  title?: string,
  children: React.ReactNode,
  transitionComponent?: React.ComponentType<TransitionProps>
}

// const Transition: any = React.forwardRef(function Transition({ children, ...rest }, ref) {
//   return <Slide direction="up" ref={ref} {...rest}></Slide>;
// });

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const FullDialog: React.FC<FullDialogProps> = props => {
  const { isOpen, onClose, title, children, transitionComponent } = props;
  const classes = useStyles();
  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={onClose}
      TransitionComponent={transitionComponent}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};


FullDialog.defaultProps = {
  title: 'Full Dialog'
};

export default FullDialog;
