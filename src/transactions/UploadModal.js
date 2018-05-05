import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  Modal,
  Table,
  Dropdown,
  Button,
} from 'semantic-ui-react';

import * as transactionAwaits from './transactionAwaits';
import * as selectors from './uploadTransactionsSelectors';
import * as metaSelectors from '../application/metaSelectors';

const KEY = 'UPLOAD_TRANSACTION';

const fieldOptions = [
  { text: 'N/A', value: 'na' },
  { text: 'Date', value: 'date' },
  { text: 'Description', value: 'description' },
  { text: 'Amount', value: 'amount' },
];

class UploadModal extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.onParse = this.onParse.bind(this);
    this.onUpload = this.onUpload.bind(this);
  }

  onColumnLinkChange(idx) {
    return (_, option) => {
      this.setState({
        [idx]: option.value,
        [option.value]: idx,
      });
    };
  }

  onParse(event) {
    const file = event.currentTarget.files[0];
    this.props.onParse(file);
  }

  onUpload() {
    this.props.onUpload(this.state);
  }

  renderColumnMap() {
    if (this.props.uploadStatus !== 'SUCCESS') {
      return null;
    }

    const headerColumns = this.props.uploadData.header;

    return (
      <Table definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Data Column</Table.HeaderCell>
            <Table.HeaderCell>Links to</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {headerColumns.map((columnName, idx) => (
            <Table.Row
              key={columnName}
            >
              <Table.Cell>{columnName}</Table.Cell>
              <Table.Cell>
                <Dropdown
                  placeholder='Select Field'
                  fluid
                  selection
                  options={fieldOptions}
                  onChange={this.onColumnLinkChange(idx)}
                  value={this.state[idx] || 'na'}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }

  renderTransactionPreview() {
    if (this.props.uploadStatus !== 'SUCCESS') {
      return null;
    }

    const firstTransaction = this.props.uploadData.body[0];

    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>{firstTransaction[this.state.date]}</Table.Cell>
            <Table.Cell>{firstTransaction[this.state.description]}</Table.Cell>
            <Table.Cell>{firstTransaction[this.state.amount]}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }

  renderUpload() {
    return (
      <input
        type="file"
        onChange={this.onParse}
        accept=".csv"
      />
    );
  }

  render() {
    return (
      <Modal trigger={this.props.trigger} closeIcon>
        <Modal.Header>Upload Transactions</Modal.Header>
        <Modal.Content>
          {this.renderUpload()}
          {this.renderColumnMap()}
          {this.renderTransactionPreview()}
        </Modal.Content>
        <Modal.Actions>
          <Button
            color='green'
            onClick={this.onUpload}
          >
            Upload!
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapState = () =>
  createStructuredSelector({
    uploadData: selectors.makeUploadDataSelector(),
    uploadStatus: metaSelectors.makeStatusSelector(KEY),
  });

const mapActions = {
  onParse: transactionAwaits.parseCSVFile,
  onUpload: transactionAwaits.uploadTransactions,
};

export default connect(mapState, mapActions)(UploadModal);
