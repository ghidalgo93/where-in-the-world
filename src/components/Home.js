import React, { useState, useEffect } from "react";
import "../styles/App.css";
import TargetPopup from "./TargetPopup";
import NamesPopup from "./NamesPopup";
import n64 from "../images/pierre-roussel-n64-phone2.jpg";
import { getCursorXY } from "../helpers";

function getElementXY() {
  const xOffset = window.event.offsetX;
  const yOffset = window.event.offsetY;
  return { x: xOffset, y: yOffset };
}

const Home = () => {
  const [imgClickLocation, setImgClickLocation] = useState({
    x: null,
    y: null,
  });
  const [targetShown, setTargetShown] = useState(false);
  const toggleTargetShown = () => {
    setTargetShown(!targetShown);
  };
  const handleClick = (e) => {
    setImgClickLocation({ x: getElementXY().x, y: getElementXY().y });
    toggleTargetShown();
  };
  return (
    <div className={"img-container"}>
      {targetShown ? <TargetPopup coords={imgClickLocation} /> : null}
      {targetShown ? <NamesPopup coords={imgClickLocation} /> : null}
      <img
        className={"img-pzl content"}
        src={n64}
        alt="n64 expolded with characters"
        onClick={handleClick}
      />
    </div>
  );
};

export default Home;
