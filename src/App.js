import React, { Component }  from 'react';

import './App.scss';
// 引入redux 
import {Provider} from 'react-redux';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import TodoIndex from './components/TodoIndex'
import todoApp from './store/reducers'
const store = createStore(todoApp);


class App extends Component {
  render() {
    return (
          <div>
            <Provider store={store}>
                <TodoIndex/>
            </Provider>
          </div>
    );
  }
}

export default App;
