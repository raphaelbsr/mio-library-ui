import React, { Component } from 'react';

import { ActionDialog, Table } from 'mio-library-ui';

export default class App extends Component {
  render() {
    return (
      <div>
        <ActionDialog isOpen={true}>Testando</ActionDialog>
        {/* <Table /> */}
      </div>
    );
  }
}
