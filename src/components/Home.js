import React, { useState, useEffect } from "react";
import "../styles/App.css";
import TargetPopup from "./TargetPopup";
import NamesPopup from "./NamesPopup";
import n64 from "../images/pierre-roussel-n64-phone2.jpg";
import { getElementXY } from "../helpers";
import firebase from "firebase/app";

const getData = async () => {
  try {
    const query = firebase.firestore().collection("chars").doc("easy");
    const doc = await query.get();
    return doc.data();
  } catch (error) {
    console.log("Collection not found: ", error);
  }
};

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

  const [chars, setChars] = useState(null);
  useEffect(async () => {
    setChars(await getData());
  }, []);

  let content = (
    <div className={"img-container"}>
      {targetShown ? <TargetPopup coords={imgClickLocation} /> : null}
      {targetShown ? (
        <NamesPopup coords={imgClickLocation} chars={chars} />
      ) : null}
      <img
        className={"img-pzl content"}
        src={n64}
        alt="n64 expolded with characters"
        onClick={handleClick}
      />
    </div>
  );

  if (!chars) {
    content = <p>Loading...</p>;
  }

  return content;
};

export default Home;
