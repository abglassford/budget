import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  Modal,
  Button,
  Input,
} from 'semantic-ui-react';

import * as awaits from '../awaits/categories';

class AddCategoryModal extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.onAdd = this.onAdd.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onAdd() {
    this.props.addCategory({
      name: this.state.value,
    });
  }

  onChange(_, { value }) {
    this.setState({ value });
  }

  render() {
    return (
      <Modal
        size="mini"
        trigger={this.props.trigger}
        closeIcon
      >
        <Modal.Header>Add Category</Modal.Header>
        <Modal.Content>
          <Input
            onChange={this.onChange}
            value={this.state.value}
            fluid
            placeholder="Category Name..."
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            color='green'
            onClick={this.onAdd}
          >
            Add
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapState = () =>
  createStructuredSelector({
  });

const mapActions = {
  addCategory: awaits.addCategory,
};

export default connect(mapState, mapActions)(AddCategoryModal);
