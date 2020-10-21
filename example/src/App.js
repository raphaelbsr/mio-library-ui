import React from 'react';

import {
  // ActionDialog,
  // LabelValue,
  // FullDialog,
  // TransferList,
  // AutoComplete,
  // TelefoneTextField
  // PasswordTextField
  PageHeader,
  Searchable,
} from 'mio-library-ui';

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    '& label.Mui-focused': {
      color: '#1A9',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#1A9',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#1A9',
      },
      '&:hover fieldset': {
        borderColor: '#1A9',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1A9',
      },
    },
  }
}))

const App = () => {

  return (
    <div>
      <PageHeader title="Cabeçalho" subtitle="SubTítulo">
        <Searchable />
      </PageHeader>
      {/* <TelefoneTextField value="3234214167"></TelefoneTextField> */}

      {/* <ActionDialog isOpen={true} okLabel="SIM" >Testando</ActionDialog> */}
      {/* <Table /> */}
      {/* <LabelValue label="Label" value="Value" />
        <FullDialog isOpen={false} title="Full Dialog" />
        {
          <TransferList
            leftData={leftData}
            rightData={rightData}
            getKey={item => item.id}
          />
        } */}

      {/* <AutoComplete
        renderOption={(option) => option.nome}
        onChange={(e, value) => console.log(value)}
        onSearch={handleSearch}
        inputProps={{
          label: "Cidades",
          margin: "normal",
          variant: "outlined",
          className: classes.root
        }}
        multiple={false}
        value={cidades[0]}
      // getOptionSelected={(option, value) => {
      //   return option.id === value.id
      // }}
      >
      </AutoComplete> */}

      {/* <PasswordTextField
          value={this.setState.senha}
          onChange={(e) => this.setState({ senha: e.target.value })}
          fullWidth
          variant="outlined"
          label="Senha"
          placeholder="Utilize uma senha segura">
        </PasswordTextField> */}

    </div >
  );
}

export default App
