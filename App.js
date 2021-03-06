import React, {Component} from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/Store/store'

export default class NewsFeed extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
