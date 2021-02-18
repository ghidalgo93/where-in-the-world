import React, { useState, useEffect } from "react";
import { useAsync } from "react-async";
import "../styles/App.css";
import TargetPopup from "./TargetPopup";
import NamesPopup from "./NamesPopup";
import n64 from "../images/pierre-roussel-n64-phone2.jpg";
import { getCursorXY } from "../helpers";
import firebase from "firebase/app";

function getElementXY() {
  const xOffset = window.event.offsetX;
  const yOffset = window.event.offsetY;
  return { x: xOffset, y: yOffset };
}

const getData = async () => {
  try {
    const query = firebase.firestore().collection("chars");
    const snapshot = await query.get();
    return snapshot.docs.map((doc) => {
      return doc.data();
    });
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
    console.log(getElementXY().x, getElementXY().y);
    setImgClickLocation({ x: getElementXY().x, y: getElementXY().y });
    toggleTargetShown();
  };

  //get data ascyjdlafly
  const { data, error } = useAsync({ promiseFn: getData });
  if (error) return `Something went wrong: ${error}`;
  if (data) {
    return (
      <div className={"img-container"}>
        {targetShown ? <TargetPopup coords={imgClickLocation} /> : null}
        {targetShown ? (
          <NamesPopup coords={imgClickLocation} data={data} />
        ) : null}
        <img
          className={"img-pzl content"}
          src={n64}
          alt="n64 expolded with characters"
          onClick={handleClick}
        />
      </div>
    );
  }
  return null;
};

export default Home;
