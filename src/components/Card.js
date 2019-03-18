import React from "react";
import faker from "faker";

const Card = () => {
  console.log(faker.image.image());
  return (
    <div className="ui card ml-5 col-sm-6">
      <div className="image">
        <img alt="post" src={faker.image.avatar()} />
      </div>
      <div className="content">
        <div className="header">Learning React??? Start Small!!!!</div>
        <div className="description">
          {" "}
          Fear from tutuorial?? Build small projects then go bigger. Day by day
          you will learn more
        </div>
        <div className="meta">
          <a href="/">hassanraja.github.io</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
