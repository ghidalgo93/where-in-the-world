import React, { useState, useEffect } from "react";
import "../styles/App.css";
import firebase from "firebase/app";

const getData = async () => {
  const query = firebase.firestore().collection("chars");
  const snapshot = await query.get();
  return snapshot.docs.map((doc) => {
    return doc.data();
  });
};

const NamesPopup = (props) => {
  const [selected, setSelected] = useState(null);
  let chars;
  useEffect(async () => {
    chars = await getData();
  }, []);

  const handleClick = (e) => {
    console.log(e.target);
    console.log(chars);
    // check to see if the character selected is within range of click
  };

  const positionStyle = {
    top: props.coords[1] + 20,
    left: props.coords[0] + 20,
  };

  return (
    <ul className={"modal names"} style={positionStyle}>
      <li className={"name"} onClick={handleClick}>
        name1
      </li>
      <li className={"name"} onClick={handleClick}>
        name2
      </li>
      <li className={"name"} onClick={handleClick}>
        name3
      </li>
    </ul>
  );
};

export default NamesPopup;
