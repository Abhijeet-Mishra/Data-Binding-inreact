import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      companyName: "IBM"
    };
  }
  onInputChange = e => {
    this.setState({ companyName: e.target.value });
  };
  ChangeCompanyName = name => {
    this.setState({ companyName: name });
  };
  render() {
    return (
      <div className="App">
        <button onClick={() => this.ChangeCompanyName("Microsoft")}>
          Change State by Anonymous function
        </button>
        <br />
        <br />
        <input
          type="text"
          value={this.state.companyName}
          onChange={this.onInputChange}
        />
        <br />
        <br />
        {this.state.companyName}
        <br />
        <br />
        <button onClick={this.ChangeCompanyName.bind(this, "Amazon")}>
          Change State by Bind function
        </button>
        <br />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
