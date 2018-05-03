import React from 'react';
import Link from 'redux-first-router-link';
import { Segment, Menu } from 'semantic-ui-react';
import * as navActions from '../navigation/duck';

class Header extends React.PureComponent {
  render() {
    return (
      <Segment
        as={Menu}
      >
        <Menu.Item
          as={Link}
          to={navActions.home()}
        >
          Home
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={navActions.dashboard()}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={navActions.budget()}
        >
          Budget
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={navActions.transactions()}
        >
          Transactions
        </Menu.Item>
      </Segment>
    );
  }
}

export default Header;
