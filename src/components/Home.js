import React, { useState, useEffect } from "react";
import "../styles/App.css";
import TargetPopup from "./TargetPopup";
import n64 from "../images/pierre-roussel-n64-phone2.jpg";

function Home() {
  const [clickPosition, setClickPosition] = useState([]);
  useEffect(() => {
    console.log(clickPosition);
  }, [clickPosition]);

  const [targetShown, setTargetShown] = useState(false);
  const toggleTargetShown = () => {
    setTargetShown(!targetShown);
  };

  function FindPosition(oElement) {
    if (typeof oElement.offsetParent != "undefined") {
      for (var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent) {
        posX += oElement.offsetLeft;
        posY += oElement.offsetTop;
      }
      return [posX, posY];
    } else {
      return [oElement.x, oElement.y];
    }
  }

  function GetCoordinates(e) {
    var PosX = 0;
    var PosY = 0;
    var ImgPos;
    ImgPos = FindPosition(e.target);
    if (!e) var e = window.event;
    if (e.pageX || e.pageY) {
      PosX = e.pageX;
      PosY = e.pageY;
    } else if (e.clientX || e.clientY) {
      PosX =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      PosY =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    PosX = PosX - ImgPos[0];
    PosY = PosY - ImgPos[1];
    setClickPosition([PosX, PosY]);
    toggleTargetShown();
  }

  return (
    <div>
      {targetShown ? <TargetPopup toggle={toggleTargetShown} /> : null}
      <img
        className={"img-pzl content"}
        src={n64}
        alt="n64 expolded with characters"
        onClick={GetCoordinates}
      />
    </div>
  );
}

export default Home;
