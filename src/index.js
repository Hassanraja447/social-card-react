import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container padded segment">
      <Header className="content"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
