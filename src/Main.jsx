import "./App.css";

import * as React from "react";

import useConfig from "./components/useConfig";
import logo from "./logo.svg";

/**
 * Our Web Application
 */
export default function Main() {
  const config = useConfig();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">This is the Main Page</h1>
      </header>
      <p className="App-intro">
        To get started, you'll need to get started.
      </p>
    </div>
  );
}
