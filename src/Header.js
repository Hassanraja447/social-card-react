import React from "react";
import faker from "faker";

const Header = () => {
  return (
    <div className="ui comments d-flex ">
      <div className="comment">
        <a className="avatar" href="/">
          <img alt="user " src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Joe Henderson
          </a>
          <div className="metadata">
            <div className="date">@ThePracticalDev</div>
            <div className="date">Sep 10</div>
          </div>
          <div className="text">
            <p className="m-0 p-0">Learning React??? Huhhhh!!!!</p>
            <p className="m-0 p-0">
              author: <a href="/"> @hassanraja447</a>
            </p>
          </div>
        </div>
      </div>
      <a href="/" className="ml-3 align-self-start">
        <i className="angle down icon" />
      </a>
    </div>
  );
};

export default Header;
