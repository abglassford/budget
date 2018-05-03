import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

import App from './application/App';

import store from './store';

class Index extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
