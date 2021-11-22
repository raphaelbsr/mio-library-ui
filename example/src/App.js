import React from 'react';

import {
  // ActionDialog
  // ActionDialog,
  // LabelValue,
  // FullDialog,
  // TransferList,
  // AutoComplete,
  // TelefoneTextField,
  // formatarTelefone
  // NumeroInscricaoTextField
  // PasswordTextField
  // PageHeader
  // CurrencyTextField
  // ContentDivider
  // Button,
  Finder
  // DataTable
  // TextField
} from 'mio-library-ui';

// import { Box, makeStyles } from '@material-ui/core';

const App = () => {
  // const [value, setValue] = useState('');
  // const iRef = useRef(null);

  return (
    <div
      style={
        {
          // width: '100%',
          // height: '100%',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center'
        }
      }
    >
      <Finder
        variant="outlined"
        onSearch={q => {}}
        textFieldProps={{
          style: {
            backgroundColor: '#716',
            color: '#fff',
            border: '1px solid #190'
          }
        }}
      />
    </div>
  );
};

export default App;
