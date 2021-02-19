import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { coordsInRange } from "../helpers";

const NamesPopup = ({ toggleTarget, coords, chars, setChars }) => {
  const [charsArray, setCharsArray] = useState(Object.values(chars));
  const positionStyle = {
    left: coords.x + 20,
    top: coords.y + 20,
  };

  const handleClick = (e) => {
    const char = e.target.textContent;
    if (coordsInRange(coords, chars[char].coords, 40)) {
      console.log("yay");
      const { [char]: removed, ...rest } = chars;
      setChars(rest);
    } else {
      console.log("saaaad");
    }
    toggleTarget();
  };

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
