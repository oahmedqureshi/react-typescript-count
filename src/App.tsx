import * as React from 'react';
import './App.css';

import logo from './logo.svg';

interface IAppState {
  counter:number
}

class App extends React.Component<{},IAppState> {

  public state = {
    counter:0
  } 

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>Awesome counter</h2>
        {this.state.counter}
        <div>
          <button onClick={()=>this.increment()}>Increment</button>
          <button onClick={()=>this.decrement()}>Decrement</button>
        </div>
      </div>
    );
  }
  private increment = (): void => {
    this.setState({
      counter:this.state.counter + 1
    })
  }

  private decrement = (): void => {
    this.setState({
      counter:this.state.counter - 1
    })
  }
}

export default App;
