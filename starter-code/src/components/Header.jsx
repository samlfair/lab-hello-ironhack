import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h2>Say hello to ReactJs</h2>
        <p>
          You will learn a front-end framework from scratch, to become a
          React.js developer.
        </p>
        <button>Awesome!</button>
      </div>
    );
  }
}
