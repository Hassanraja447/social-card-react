import React from "react";
import faker from "faker";

const Header = () => {
  return (
    <div className="ui comments">
      <div className="comment">
        <a className="avatar">
          <img alt="user " src={faker.image.avatar()} />
        </a>
        <div class="content">
          <a class="author">Joe Henderson</a>
          <div class="metadata">
          <div class="date">@ThePracticalDev</div>
          <div class="date">Sep 10</div>
          </div>
          <div class="text">
            <p>
              Learning React??? Huhhhh!!!!
            </p>
            <p>
              author: <a href="#"> @hassanraja447</a>
            </p>
           
          </div>
          <i class="angle down icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
