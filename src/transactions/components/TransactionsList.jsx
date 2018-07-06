import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Table, Menu } from 'semantic-ui-react';

import UploadModal from './UploadModal';
import * as awaits from '../awaits/transactions';
import * as selectors from '../../data/selectors';
import transactionSchema from '../schemas/transactions';
import { formatToDollars } from '../../utils/money';
import { formatForDisplay } from '../../utils/date';

class TransactionsList extends React.PureComponent {
  componentDidMount() {
    this.props.onLoad();
  }

  renderTransaction(transaction) {
    return (
      <Table.Row key={transaction.id}>
        <Table.Cell>{formatForDisplay(transaction.date)}</Table.Cell>
        <Table.Cell>{transaction.description}</Table.Cell>
        <Table.Cell>{transaction.categoryId}</Table.Cell>
        <Table.Cell>{formatToDollars(transaction.amount)}</Table.Cell>
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
                Date
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
