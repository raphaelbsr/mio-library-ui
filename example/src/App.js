import React, { useState } from 'react';

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
  Button,
  Finder
} from 'mio-library-ui';

import { Box, makeStyles } from '@material-ui/core';

const App = () => {
  const [inscricao, setInscricao] = useState('');
  // const iRef = useRef(null);
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
      {/* <Button
        onClick={() => {
          console.log(iRef);
        }}
      >
        Teste Ref
      </Button> */}
      <Finder isOpen={true} showIcons={true} label="Buscar" />
      {/* {formatarTelefone('3234214167')} */}
      {/* <NumeroInscricaoTextField
        value={inscricao}
        onChange={e => setInscricao(e.target.value)}
      /> */}
    </div>
  );
};

export default App;
