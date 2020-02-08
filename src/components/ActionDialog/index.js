import React from 'react';
import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  CircularProgress as MuiCircularProgress,
  Button
} from '@material-ui/core';
import PropTypes from 'prop-types';

const Actions = props => {
  const {
    onOkClick,
    onCancelClick,
    cancelLabel,
    okLabel,
    isOkProcessing
  } = props;
  return (
    <MuiDialogActions>
      <Button onClick={onCancelClick} color="primary">
        {cancelLabel}
      </Button>
      <Button disabled={isOkProcessing} onClick={onOkClick} color="primary">
        {!isOkProcessing ? okLabel : <MuiCircularProgress size={16} />}
      </Button>
    </MuiDialogActions>
  );
};

const ActionDialog = props => {
  const { isOpen, title, children, customActions, onClose } = props;
  return (
    <MuiDialog fullWidth maxWidth="sm" open={isOpen} onClose={onClose}>
      <MuiDialogTitle>{title}</MuiDialogTitle>
      <MuiDialogContent>{children}</MuiDialogContent>
      {customActions ? customActions : <Actions {...props} />}
    </MuiDialog>
  );
};

ActionDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  customActions: PropTypes.element,
  onOkClick: PropTypes.func,
  onCancelClick: PropTypes.func,
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  isOkProcessing: PropTypes.bool.isRequired
};

ActionDialog.defaultProps = {
  title: 'Action Dialog',
  customActions: null,
  onOkClick: () => {},
  onCancelClick: () => {},
  okLabel: 'Ok',
  cancelLabel: 'Cancelar',
  isOkProcessing: false
};

export default ActionDialog;
