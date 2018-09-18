import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';

import reducers from './reducers/';
import config from '../env.js';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // const config = {
    //   apiKey: 'AIzaSyDsElypKztiApRkOt0EJfcvvZY8kfz-h10',
    //   authDomain: 'rn-manager-18854.firebaseapp.com',
    //   databaseURL: 'https://rn-manager-18854.firebaseio.com',
    //   projectId: 'rn-manager-18854',
    //   storageBucket: 'rn-manager-18854.appspot.com',
    //   messagingSenderId: '463776788246'
    // };
    console.log(config);
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
