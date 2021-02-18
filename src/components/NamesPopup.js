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
    console.log(e.target);
    console.log(props.coords);
    //logic time budddddddy!
    //
    //
  };
  const listItems = props.data.map((char) => (
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
