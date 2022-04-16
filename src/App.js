import "./App.css";
import Background from "./components/Background/Background";
import { useState } from "react";
import React from "react";
import ChatInterface from "./components/ChatInterface/ChatInterface";
import LandingComponent from "./components/LandingComponent/LandingComponent";

function App() {
  const [state, setstate] = useState(0);
  const clickHandler = () => {
    setstate((state) => {
      return state ^ 1;
    });
  };

  return (
    <div className="App">
      <Background>
        {state == 0 ? (
          <LandingComponent onClick={clickHandler}></LandingComponent>
        ) : (
          <ChatInterface></ChatInterface>
        )}
      </Background>
    </div>
  );
}

export default App;
