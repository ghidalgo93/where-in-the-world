import React, { useState, useEffect } from "react";
import "../styles/App.css";
import TargetPopup from "./TargetPopup";
import n64 from "../images/pierre-roussel-n64-phone2.jpg";
import { getCursorXY } from "../helpers";

function Home() {
  const [pageLocation, setPageLocation] = useState([]);
  const [targetShown, setTargetShown] = useState(false);
  const toggleTargetShown = () => {
    setTargetShown(!targetShown);
  };

  const handleClick = (e) => {
    const cursorCoords = getCursorXY(e);
    setPageLocation([cursorCoords[0], cursorCoords[1]]);
    toggleTargetShown();
  };
  return (
    <div>
      {targetShown ? <TargetPopup coords={pageLocation} /> : null}
      <img
        className={"img-pzl content"}
        src={n64}
        alt="n64 expolded with characters"
        onClick={handleClick}
      />
    </div>
  );
}

export default Home;
