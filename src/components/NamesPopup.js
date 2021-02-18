import React, { useState, useEffect } from "react";
import { useAsync } from "react-async";
import "../styles/App.css";
import firebase from "firebase/app";

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

const NamesPopup = (props) => {
  const positionStyle = {
    left: props.coords.x + 20,
    top: props.coords.y + 20,
  };

  const handleClick = (e) => {
    console.log(e.target);
    console.log(props.coords);
  };

  //get the data asynchronoskasdlkfly
  const { data, error } = useAsync({ promiseFn: getData });
  if (error) return `Someting went wrong: ${error}`;
  if (data) {
    const listItems = data.map((char) => (
      <li key={char.id} className={"name"} onClick={handleClick}>
        {char.name}
      </li>
    ));
    return (
      <ul className={"modal names"} style={positionStyle}>
        {listItems}
      </ul>
    );
  }
  return null;
};

export default NamesPopup;
