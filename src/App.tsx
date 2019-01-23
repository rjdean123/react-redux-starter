import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from 'src';
import './App.css';
import { MyComponent } from './components/MyComponent';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Provider store={store}>
          <MyComponent />
        </Provider>
      </div>
    );
  }
}

export default App;
