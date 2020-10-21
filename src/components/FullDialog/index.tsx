import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

const Transition: any = React.forwardRef(function Transition({ children, ...rest }, ref) {
  return <Slide direction="up" ref={ref} {...rest}></Slide>;
});

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const FullDialog = props => {
  const { isOpen, onClose, title, children } = props;
  const classes = useStyles();
  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={onClose}
      TransitionComponent={Transition}
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
          {/* <Button color="inherit" onClick={handleOpenAdicionar}>
              Adicionar
            </Button> */}
        </Toolbar>
      </AppBar>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

FullDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.element
};

FullDialog.defaultProps = {
  title: '',
  content: <div />
};

export default FullDialog;
