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

const CharList = (props) => {
  const { data, error } = useAsync({ promiseFn: getData });
  const handleClick = (e) => {
    console.log(props.pos);
    console.log(data);
    // console.log(data);
    // if the clicked name has coords within range
    // make success note
    // remove name from list
    // else
    // error note
  };

  if (error) return error.message;
  if (data) {
    const listItems = data.map((char) => (
      <li key={char.id} className={"name"} onClick={handleClick}>
        {char.name}
      </li>
    ));
    const list = (
      <ul className={"modal names"} style={props.pos}>
        {listItems}
      </ul>
    );
    return list;
  }
  return null;
};

const NamesPopup = (props) => {
  const positionStyle = {
    left: props.coords.x + 20,
    top: props.coords.y + 20,
  };

  return <CharList pos={positionStyle} />;
};

export default NamesPopup;
