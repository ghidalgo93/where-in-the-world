import React, { useState, useEffect } from "react";
import "../styles/App.css";
import TargetPopup from "./TargetPopup";
import NamesPopup from "./NamesPopup";
import n64 from "../images/pierre-roussel-n64-phone2.jpg";
import { getElementXY } from "../helpers";
import firebase from "firebase/app";

const Home = () => {
  useEffect(() => {
    getData();
  }, []);
  const [imgClickLocation, setImgClickLocation] = useState({});
  const [targetShown, setTargetShown] = useState(false);
  const [chars, setChars] = useState(null);

  const handleClick = (e) => {
    setImgClickLocation({ x: getElementXY().x, y: getElementXY().y });
    setTargetShown(!targetShown);
  };

  const getData = async () => {
    const query = firebase.firestore().collection("chars").doc("easy");
    const doc = await query.get();
    setChars(doc.data());
  };

  let content = (
    <div className={"img-container"}>
      {targetShown ? <TargetPopup coords={imgClickLocation} /> : null}
      {targetShown ? (
        <NamesPopup
          coords={imgClickLocation}
          chars={chars}
          setChars={setChars}
        />
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
