import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = { gifts: [] };
  }
  render() {
    return (
      <div>
        <h1>Gift Giver</h1>
      </div>
    );
  }
}

export default App;
