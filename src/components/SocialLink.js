import React from "react";
import "../styles/social-link.css";

const SocialLink = () => {
  return (
    <div className="social-link">
      <ul className="ui mini horizontal d-flex">
        <li className="item">
          <a href="/" className="ui label basic">
            <i className="rocketchat icon" /> 2
          </a>
        </li>
        <li className="item">
          <a href="/" className="ui label green basic">
            <i className="retweet icon" /> 15
          </a>
        </li>
        <li className="item">
          <a href="/" className="ui label basic red">
            <i className="heart outline icon" /> 190
          </a>
        </li>
        <li className="item">
          <a href="/" className="ui label basic">
            <i className="mail icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLink;
