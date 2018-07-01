import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Table, Menu } from 'semantic-ui-react';

import UploadModal from './UploadModal';
import * as awaits from './transactionAwaits';
import * as selectors from '../data/selectors';
import transactionSchema from './schema';

class TransactionsList extends React.PureComponent {
  componentDidMount() {
    this.props.onLoad();
  }

  renderTransaction(transaction) {
    return (
      <Table.Row>
        <Table.Cell>{transaction.id}</Table.Cell>
        <Table.Cell>{transaction.description}</Table.Cell>
      </Table.Row>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Menu
          size="mini"
        >
          <UploadModal
            trigger={
              <Menu.Item
                position="right"
              >
                Upload Transactions
              </Menu.Item>
            }
          />
        </Menu>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                Transaction ID
              </Table.HeaderCell>
              <Table.HeaderCell>
                Description
              </Table.HeaderCell>
              <Table.HeaderCell>
                Category
              </Table.HeaderCell>
              <Table.HeaderCell>
                Amount
              </Table.HeaderCell>
              <Table.HeaderCell>
                Date
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.transactions.map(this.renderTransaction)}
          </Table.Body>
        </Table>
      </React.Fragment>
    );
  }
}

const mapState = () =>
  createStructuredSelector({
    transactions: selectors.getResultEntitiesSelector(
      'allTransactions',
      [transactionSchema],
    ),
  });

const mapActions = {
  onLoad: awaits.getAllTransactions,
};

export default connect(mapState, mapActions)(TransactionsList);
