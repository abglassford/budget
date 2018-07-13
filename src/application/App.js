import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './Header';

import * as navigationSelectors from '../navigation/selectors';
import * as navigationConstants from '../navigation/duck';
import * as applicationAwaits from './applicationAwaits';

import TransactionsList from '../transactions/components/TransactionsList';
import Budget from '../budget/components/Budget';
import UserSettings from '../users/components/UserSettings';

class App extends React.PureComponent {
  componentDidMount() {
    this.props.onPing();
  }

  renderPage() {
    switch (this.props.location) {
      case navigationConstants.TRANSACTIONS:
        return (
          <TransactionsList />
        );
      case navigationConstants.BUDGET:
        return (
          <Budget />
        );
      case navigationConstants.USER_SETTINGS:
        return (
          <UserSettings />
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        {this.renderPage()}
      </React.Fragment>
    );
  }
}

const mapState = () =>
  createStructuredSelector({
    location: navigationSelectors.makeCurrentLocationTypeSelector(),
  });

const mapActions = {
  onPing: applicationAwaits.ping,
};

export default connect(mapState, mapActions)(App);
