import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM, { render } from "react-dom";
import H1 from "./Header";
import Button from "./button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  newButtonClick(num) {
    num += 1;
    return num;
  }
  handleClick() {
    this.setState({
      clicks: this.newButtonClick(this.state.cli),
    });
  }

  render() {
    return (
      <div className="App">
        <H1 clicks={this.state.clicks} />
        <Button handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
