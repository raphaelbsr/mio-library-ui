import React, { Component } from 'react';

import { ActionDialog, LabelValue } from 'mio-library-ui';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <ActionDialog isOpen={true}>Testando</ActionDialog> */}
        {/* <Table /> */}
        <LabelValue label="Label" value="Value" />
      </div>
    );
  }
}
