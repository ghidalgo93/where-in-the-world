import React, { useState, useEffect } from "react";
import { useAsync } from "react-async";
import "../styles/App.css";
import firebase from "firebase/app";

const NamesPopup = (props) => {
  const positionStyle = {
    left: props.coords.x + 20,
    top: props.coords.y + 20,
  };

  const handleClick = (e) => {
    // console.log(e.target.textContent);
    // console.log(props.coords);
    // console.log(props.data);
    //logic time budddddddy!
    //if nameclickon.coords === current coords
    const char = e.target.textContent;
    // console.log(props.chars[char].coords, props.coords);
    if (props.chars[char].coords === props.coords) {
      console.log("fuck yeah");
    } else {
      console.log("saaaad");
    }
    //yay
    //else
    //boo
  };

  const charsArray = Object.values(props.chars);
  const listItems = charsArray.map((char) => (
    <li key={char.id} className={"name"} onClick={handleClick}>
      {char.name}
    </li>
  ));
  // console.log(props.chars.mario.coords);

  return (
    <ul className={"modal names"} style={positionStyle}>
      {listItems}
    </ul>
  );
};

export default NamesPopup;
