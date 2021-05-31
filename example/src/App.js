import React from 'react';

import {
  ActionDialog
  // ActionDialog,
  // LabelValue,
  // FullDialog,
  // TransferList,
  // AutoComplete,
  // TelefoneTextField,
  // NumeroInscricaoTextField,
  // PasswordTextField
  // PageHeader
  // CurrencyTextField
  // ContentDivider
} from 'mio-library-ui';

import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& label.Mui-focused': {
      color: '#1A9'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#1A9'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#1A9'
      },
      '&:hover fieldset': {
        borderColor: '#1A9'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1A9'
      }
    }
  }
}));

const App = () => {
  return (
    <ActionDialog title="ActionDialog" isOpen={true}>
      Olá
    </ActionDialog>
  );
};

export default App;
