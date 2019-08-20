import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <Person name="Will" age="39" />
        <Person name="Tawnya" age="27">
          My Hobbies: Bodybuilding
        </Person>
        <Person name="Alyssa" age="8" />
      </div>
    );
  }
}

export default App;
