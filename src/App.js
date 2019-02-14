import React, { Component } from 'react';
import './App.css';
import CircleSelectors from "./components/CircleSelectors";
import Circles from "./components/Circles";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">PROJECT 4 ASSESSMENT</header>
        <main>  
          <CircleSelectors />
          <Circles />
        </main>
      </div>
    );
  }
}

export default App;
