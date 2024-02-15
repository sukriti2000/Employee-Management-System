/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Contents from "./Contents.jsx";
import Navbar from "./Navbar.jsx";

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      // hashrouter to allow nav bar links to work
      <HashRouter>
        <div>
          <Navbar />
          <Contents />
        </div>
      </HashRouter>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("contents"));
