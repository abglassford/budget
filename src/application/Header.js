import React from 'react';
import Link from 'redux-first-router-link';
import { Menu } from 'semantic-ui-react';
import * as navActions from '../navigation/duck';

class Header extends React.PureComponent {
  render() {
    return (
      <Menu>
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
        <Menu.Item
          as={Link}
          to={navActions.accounts()}
        >
          Accounts
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={navActions.userSettings()}
        >
          User Settings
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
