import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input } from 'semantic-ui-react';

class UserSettings extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userId: window.localStorage.getItem('userId') || '',
    };

    this.setUserId = this.setUserId.bind(this);
  }

  setUserId(_, { value }) {
    this.setState({
      userId: value,
    });
    window.localStorage.setItem('userId', value);
  }

  render() {
    return (
      <Input
        value={this.state.userId}
        onChange={this.setUserId}
      />
    );
  }
}

const mapState = () =>
  createStructuredSelector({
  });

const mapActions = {
};

export default connect(mapState, mapActions)(UserSettings);
