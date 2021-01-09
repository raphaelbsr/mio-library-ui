import React, { useState } from 'react';

import {
  // ActionDialog,
  // LabelValue,
  // FullDialog,
  // TransferList,
  AutoComplete,
  // TelefoneTextField,
  // NumeroInscricaoTextField,
  // PasswordTextField
  //PageHeader,
  CurrencyTextField
} from 'mio-library-ui';

import { makeStyles } from '@material-ui/core';

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
  const estados = [
    {
      sigla: 'MG',
      nome: 'Minas Gerais'
    },
    {
      sigla: 'RJ',
      nome: 'Rio de Janeiro'
    },
    {
      sigla: 'SP',
      nome: 'São Paulo'
    }
  ];
  const handleSearch = query => {
    console.log('QUERY ' + query);
    // if (query) {
    return estados.filter(estado => estado.nome.includes(query));
    // }
    // return estados;
  };
  const handleChange = (e, newValue) => {
    // console.log(newValue);
  };
  const renderOption = estado => {
    return `${estado.sigla} - ${estado.nome}`;
  };
  return (
    <AutoComplete
      variant="contained"
      onSearch={handleSearch}
      onChange={handleChange}
      renderOption={renderOption}
    ></AutoComplete>
  );
};

export default App;
