import "./App.css";

import * as React from "react";

import useConfig from "./components/useConfig";
import logo from "./logo.svg";

/**
 * Our Web Application
 */
export default function EBoard() {
  const config = useConfig();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">This is the E-Board Page</h1>
      </header>
      <p className="App-intro">
        What a great page...
      </p>
    </div>
  );
}
