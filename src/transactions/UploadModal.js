import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';

import { uploadTransactions } from './transactionAwaits';

class UploadModal extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onUpload = this.onUpload.bind(this);
  }

  onUpload(event) {
    const file = event.currentTarget.files[0];
    this.props.onUpload(file);
  }

  render() {
    return (
      <Modal trigger={this.props.trigger} closeIcon>
        <Modal.Header>Upload Transactions</Modal.Header>
        <Modal.Content>
          <input type="file" onChange={this.onUpload} />
        </Modal.Content>
      </Modal>
    );
  }
}

const mapActions = {
  onUpload: uploadTransactions,
};

export default connect(null, mapActions)(UploadModal);
