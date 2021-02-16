import React, { useState, useEffect } from "react";
import "../styles/App.css";
import TargetPopup from "./TargetPopup";
import NamesPopup from "./NamesPopup";
import n64 from "../images/pierre-roussel-n64-phone2.jpg";
import { getCursorXY } from "../helpers";

const Home = () => {
  const [pageLocation, setPageLocation] = useState([]);
  const [targetShown, setTargetShown] = useState(false);
  const toggleTargetShown = () => {
    setTargetShown(!targetShown);
  };
  const handleClick = (e) => {
    const cursorCoords = { x: getCursorXY(e)[0], y: getCursorXY(e)[1] };
    setPageLocation([cursorCoords.x, cursorCoords.y]);
    toggleTargetShown();
  };
  return (
    <div>
      {targetShown ? <TargetPopup coords={pageLocation} /> : null}
      {targetShown ? <NamesPopup coords={pageLocation} /> : null}
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
