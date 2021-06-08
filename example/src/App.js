import React, { useState } from 'react';

import {
  // ActionDialog
  // ActionDialog,
  // LabelValue,
  // FullDialog,
  // TransferList,
  // AutoComplete,
  // TelefoneTextField,
  formatarTelefone
  // NumeroInscricaoTextField
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
  const [inscricao, setInscricao] = useState('');

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {formatarTelefone('3234214167')}
      {/* <NumeroInscricaoTextField
        value={inscricao}
        onChange={e => setInscricao(e.target.value)}
      /> */}
    </div>
  );
};

export default App;
