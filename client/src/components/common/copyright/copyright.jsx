import React, { Component } from "react";

class Copyright extends Component {
  render() {
    return (
      <div className="copyright">
        <p>
          Copyright © 2021{" "}
          <a href="https://github.com/Cvellle" target="_blank">
            {this.props.title}
          </a>. All Rights Reserved.
        </p>
      </div>
    );
  }
}

export default Copyright;
