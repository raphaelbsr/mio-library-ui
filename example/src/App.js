import React, { Component } from 'react';

import {
  // ActionDialog,
  // LabelValue,
  // FullDialog,
  // TransferList,
  AutoComplete
} from 'mio-library-ui';

export default class App extends Component {
  render() {
    const leftData = [
      { id: 1, nome: 'Registro 1' },
      { id: 2, nome: 'Registro 2' },
      { id: 3, nome: 'Registro 3' }
    ];

    const rightData = [{ id: 4, nome: 'Registro 4' }];

    const handleSearch = async (query) => {
      if (query.length > 0) {
        console.log('mquery' + query)
        return leftData
      }
      return []
    }

    return (
      <div>
        {/* <ActionDialog isOpen={true}>Testando</ActionDialog> */}
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

        <AutoComplete
          renderOptions={(options) => options.map((option) => option.id + ' - ' + option.nome)}
          onChange={(value) => console.log('on change ' + value)}
          onSearch={handleSearch}
          inputProps={{ label: "Cidades", margin: "normal", variant: "outlined" }}
        >

        </AutoComplete>

      </div >
    );
  }
}
