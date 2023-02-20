import React from "react";
import "./ContentAuth.scss";
import Card from "./components/Card";

function ContentAuth({ isLogin }) {
  return (
    <section className="contentAuth">
      <div
        className={
          isLogin
            ? `contentAuth__CardsContainer rotate`
            : `contentAuth__CardsContainer`
        }
      >
        <div className="contentAuth__cardContainer top-left">
          <Card nameClass={"tiny  left-top"} />
          <Card nameClass={"imageCard left-top"} />
        </div>
        <div className="contentAuth__cardContainer top-right">
          <Card nameClass={"little"} />
          <Card />
        </div>
        <div className="contentAuth__cardContainer bottom-left">
          <Card nameClass={"medium  left-bottom"} />
          <Card nameClass={"little left-bottom"} />
          <Card nameClass={"big left-bottom"} />
        </div>
        <div className="contentAuth__cardContainer bottom-right">
          <Card nameClass={"little right-bottom"} />
          <Card nameClass={"imageCard left-top"} />
        </div>
      </div>
      <h1 className="contentAuth__title">Este es un titulo motivador</h1>
      <p className="contentAuth__subtitle">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        maxime magnam ut voluptatibus exercitationem provident. Officiis culpa
        tempore, tenetur maxime maiores earum placeat iste nulla quis.
      </p>
    </section>
  );
}

export default ContentAuth;
