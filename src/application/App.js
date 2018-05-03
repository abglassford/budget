import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './Header';

import * as navigationSelectors from '../navigation/selectors';
import * as navigationConstants from '../navigation/duck';

class App extends React.PureComponent {
  renderPage() {
    switch(this.props.location) {
      case navigationConstants.TRANSACTIONS:
        return (
          <div>TRANSACTIONS</div>
        );
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

export default connect(mapState)(App);
