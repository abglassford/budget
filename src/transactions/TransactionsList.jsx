import React from 'react';
import { Table, Menu } from 'semantic-ui-react';

import UploadModal from './UploadModal';

class TransactionsList extends React.PureComponent {
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
                Payee
              </Table.HeaderCell>
              <Table.HeaderCell>
                Category
              </Table.HeaderCell>
              <Table.HeaderCell>
                Notes
              </Table.HeaderCell>
              <Table.HeaderCell>
                Amount
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          </Table.Body>
        </Table>
      </React.Fragment>
    );
  }
}

export default TransactionsList;
