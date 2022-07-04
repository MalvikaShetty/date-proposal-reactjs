import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";

function No() {
  let navigate = useNavigate();
  const [text, setText] = useState("Are you sure sUrE?!🥺");

  const changeText = () => {
    setText(
      <header className="App-custom">
        <h2>Okay then, me go die in a corner :'((((</h2>
      </header>
    );
  };

  return (
    <header className="App-custom">
      <h2>{text}</h2>
      <span>
        <button
          style={{ fontWeight: "bold", paddingRight: 50, paddingLeft: 40 }}
          className="btn btn-primary btn-lg m-3"
          onClick={changeText}
        >
          &nbsp;&nbsp; Yes &nbsp;&nbsp;
        </button>
        <button
          style={{ fontWeight: "bold", paddingRight: 50, paddingLeft: 40 }}
          className="btn btn-secondary btn-lg"
          onClick={() => {
            navigate("/");
          }}
        >
          &nbsp;&nbsp; No &nbsp;&nbsp;
        </button>
      </span>
    </header>
  );
}

export default No;
