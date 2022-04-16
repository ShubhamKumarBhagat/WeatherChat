import "./LandingComponent.css";
import React from "react";

const LandingComponent = (props) => {
  return (
    <React.Fragment>
      <h1 className="header">Weather Chat</h1>
      <button className="chat-button" onClick={props.onClick}>
        Start Chatting
      </button>
    </React.Fragment>
  );
};

export default LandingComponent;
