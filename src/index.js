import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Card from "./Card";
import SocialLink from "./SocialLink";

const App = () => {
  return (
    <div className="ui container segment d-flex flex-column align-items-center">
      <Header />
      <Card />
      <SocialLink />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
