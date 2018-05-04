import React from 'react';
import { Modal } from 'semantic-ui-react';

class UploadModal extends React.PureComponent {
  render() {
    return (
      <Modal trigger={this.props.trigger} closeIcon>
        <Modal.Header>Upload Transactions</Modal.Header>
        <Modal.Content>
          <input type="file" />
        </Modal.Content>
      </Modal>
    );
  }
}

export default UploadModal;
