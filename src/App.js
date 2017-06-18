import React, { Component } from 'react';
import { Provider } from 'react-redux';
import initIcons from '@kupibilet/icons'
import logo from './logo.svg';
import './App.css';
import store from './store'
import Passengers from './component/passengers'
import Button from './component/button'

class App extends Component {
  render() {    
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <Passengers user={store.getState().form}/>
          <Button />

          <div
            dangerouslySetInnerHTML={{ __html: initIcons() }}
            style={{
              display: 'none',
            }}
          />

        </div>
      </Provider>
    );
  }
}

export default App;
