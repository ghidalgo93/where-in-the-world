import React, { useState, useEffect } from "react";
import { useAsync } from "react-async";
import "../styles/App.css";
import firebase from "firebase/app";
import { coordsInRange } from "../helpers";

const NamesPopup = (props) => {
  const positionStyle = {
    left: props.coords.x + 20,
    top: props.coords.y + 20,
  };

  const handleClick = (e) => {
    const char = e.target.textContent;
    if (coordsInRange(props.coords, props.chars[char].coords, 40)) {
      console.log("fuck yeah");
      const newChars = props.chars;
      delete newChars[char];
      props.setChars(newChars);
    } else {
      console.log("saaaad");
    }
  };

  useEffect(() => {}, [props.chars]);

  const charsArray = Object.values(props.chars);
  const listItems = charsArray.map((char) => (
    <li key={char.id} className={"name"} onClick={handleClick}>
      {char.name}
    </li>
  ));

  return (
    <ul className={"modal names"} style={positionStyle}>
      {listItems}
    </ul>
  );
};

export default NamesPopup;
