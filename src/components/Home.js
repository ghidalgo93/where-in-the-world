import React, { useState, useEffect } from "react";
import "../styles/App.css";
import MessageBanner from "./MessageBanner";
import TargetPopup from "./TargetPopup";
import NamesPopup from "./NamesPopup";
import n64 from "../images/pierre-roussel-n64-phone2.jpg";
import { getElementXY } from "../helpers";
import firebase from "firebase/app";

const Home = () => {
  useEffect(() => {
    fetchCharacters();
  }, []);
  const [imgClickLocation, setImgClickLocation] = useState({});
  const [targetShown, setTargetShown] = useState(false);
  const [chars, setChars] = useState();
  const [messageShown, setMessageShown] = useState(false);

  const handleClick = (e) => {
    setImgClickLocation({ x: getElementXY().x, y: getElementXY().y });
    setTargetShown(!targetShown);
    setMessageShown(!messageShown);
  };
  const fetchCharacters = async () => {
    const query = firebase.firestore().collection("chars").doc("easy");
    const doc = await query.get();
    setChars(doc.data());
  };

  let content = (
    <div className={"img-container"}>
      {messageShown ? <MessageBanner onMessageShow={setMessageShown} /> : null}
      {targetShown ? <TargetPopup coords={imgClickLocation} /> : null}
      {targetShown ? (
        <NamesPopup
          toggleTarget={() => setTargetShown(!targetShown)}
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
  if (!chars) content = <p>Loading...</p>;

  return content;
};

export default Home;
