import React, { Component } from 'react';

import {
  ActionDialog,
  LabelValue,
  FullDialog,
  TransferList
} from 'mio-library-ui';

export default class App extends Component {
  render() {
    const leftData = [
      { id: 1, nome: 'Registro 1' },
      { id: 2, nome: 'Registro 2' },
      { id: 3, nome: 'Registro 3' }
    ];

    const rightData = [{ id: 4, nome: 'Registro 4' }];

    return (
      <div>
        {/* <ActionDialog isOpen={true}>Testando</ActionDialog> */}
        {/* <Table /> */}
        {/* <LabelValue label="Label" value="Value" /> */}
        {/* <FullDialog isOpen={true} title="Full Dialog" /> */}
        {
          <TransferList
            leftData={leftData}
            rightData={rightData}
            getKey={item => item.id}
          />
        }
      </div>
    );
  }
}
