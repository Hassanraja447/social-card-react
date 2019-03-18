import React from "react";
import Header from "./Header";
import Card from "./Card";
import SocialLink from "./SocialLink";
import "../styles/social-card.css";

const SocialCard = () => {
  return (
    <div className=" d-flex flex-column align-items-start social-card">
      <Header />
      <Card />
      <SocialLink />
    </div>
  );
};

export default SocialCard;
