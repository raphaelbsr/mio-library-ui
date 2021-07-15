import React from 'react';
import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  CircularProgress as MuiCircularProgress,
  DialogProps,
  Button,
  IconButton,
} from '@material-ui/core';

import { Close as CloseIcon } from '@material-ui/icons'

import PageHeader from '../PageHeader';
import ButtonBox from '../ButtonBox';

interface ActionProps {
  onClose: any,
  onOkClick: any,
  onCancelClick: any,
  cancelLabel?: string,
  okLabel?: string,
  isOkProcessing?: boolean,
}

interface ActionDialogProps {
  title?: string,
  subtitle?: string,
  onClose: any,
  isOpen: boolean,
  onOkClick: any,
  onCancelClick: any,
  cancelLabel?: string,
  okLabel?: string,
  isOkProcessing?: boolean,
  customActions: React.ReactNode,
  dialogProps?: DialogProps
  rest: ActionProps,
  disableEnforceFocus: boolean,
  renderRight?: boolean | React.ReactNode,
}

const Actions: React.FC<ActionProps> = props => {
  const {
    onOkClick,
    onCancelClick,
    cancelLabel,
    okLabel,
    isOkProcessing,
  } = props;
  return (
    <MuiDialogActions >
      <Button onClick={onCancelClick} color="primary">
        {cancelLabel}
      </Button>
      <Button disabled={isOkProcessing} onClick={onOkClick} color="primary">
        {!isOkProcessing ? okLabel : <MuiCircularProgress size={16} />}
      </Button>
    </MuiDialogActions>
  );
};

const ActionDialog: React.FC<ActionDialogProps> = props => {
  const { isOpen, title, subtitle, children, customActions, onClose, disableEnforceFocus, dialogProps, renderRight, ...rest } = props;
  return (
    <MuiDialog {...dialogProps} open={isOpen} onClose={onClose} disableEnforceFocus={disableEnforceFocus}>
      {
        title &&
        <MuiDialogTitle>
          <PageHeader
            title={title}
            subtitle={subtitle}
            renderRight={
              <ButtonBox spacing={1}>
                {renderRight && renderRight}
                <IconButton size="small" onClick={onClose}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </ButtonBox>
            } />
        </MuiDialogTitle>
      }
      <MuiDialogContent>{children}</MuiDialogContent>
      {customActions ? customActions : <Actions {...props} {...rest} />}
    </MuiDialog>
  );
};

ActionDialog.defaultProps = {
  okLabel: 'Ok',
  cancelLabel: 'Cancelar',
  isOkProcessing: false,
  disableEnforceFocus: false,
  dialogProps: {
    fullWidth: true,
    maxWidth: "sm",
    open: false
  },
  subtitle: null,
  renderRight: false
};

export default ActionDialog;
