import React from "react";
import ReactDOM from "react-dom";
import SocialCard from "./components/SocialCard";

const App = () => {
  return (
    <div>
      <SocialCard />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
