import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Table, Menu } from 'semantic-ui-react';

import * as awaits from '../awaits/categories';
import * as selectors from '../../data/selectors';
import categorySchema from '../schemas/categories';
import { formatToDollars } from '../../utils/money';
import { formatForDisplay } from '../../utils/date';

import AddCategoryModal from './AddCategoryModal';

class TransactionsList extends React.PureComponent {
  componentDidMount() {
    this.props.onLoad();
  }

  renderCategory(category) {
    return (
      <Table.Row key={category.id}>
        <Table.Cell>{category.name}</Table.Cell>
        <Table.Cell>total</Table.Cell>
      </Table.Row>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Menu
          size="mini"
        >
          <AddCategoryModal
            trigger={
              <Menu.Item
                position="right"
              >
                Add Category
              </Menu.Item>
            }
          />
        </Menu>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                Category
              </Table.HeaderCell>
              <Table.HeaderCell>
                Total
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.categories.map(this.renderCategory)}
          </Table.Body>
        </Table>
      </React.Fragment>
    );
  }
}

const mapState = () =>
  createStructuredSelector({
    categories: selectors.getResultEntitiesSelector(
      'allCategories',
      [categorySchema],
    ),
  });

const mapActions = {
  onLoad: awaits.getAllCategories,
};

export default connect(mapState, mapActions)(TransactionsList);
