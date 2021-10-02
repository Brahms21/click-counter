import React from "react";
export default class H1 extends React.Component {
  render() {
    return <h1>Number of clicks: {this.props.clicks} </h1>;
  }
}
