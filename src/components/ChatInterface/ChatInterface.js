import "./ChatInterface.css";
import LeftChat from "../LeftChat/LeftChat";
import RightChat from "../RightChat/RightChat";
import sendicon from "../../../src/send-button-icon.png";
import { useState } from "react";

const ChatInterface = () => {
  const url =
    "http://api.weatherstack.com/current?access_key=369854f968e85650d5dbd443698dffeb";
  function fetchweather(location) {
    fetch(url + "&query=" + location)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw new Error("err");
        setchats((prev) => {
          return [
            ...prev.slice(0, prev.length - 1),
            "Weather is " +
              data.current.weather_descriptions[0] +
              ". The temperature is " +
              data.current.temperature +
              " degree Celcius and it feels like " +
              data.current.feelslike +
              " degrees.",
          ];
        });
      })
      .catch((err) => {
        setchats((prev) => {
          return [
            ...prev.slice(0, prev.length - 1),
            "Oops something went wrong!! Check your entered location or your internet connection.",
          ];
        });
      });
  }
  const [chats, setchats] = useState([
    "Hello user, welcome to WeatherChat. To Know current weather of a location, type the location name. For example, type Ranchi.",
  ]);
  const [chat, setchat] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (chat.length == 0) return;
    setchats((prev) => {
      return [...prev, chat, "Typing......."];
    });
    setchat("");
    fetchweather(chat);
  };
  const changeHandler = (event) => {
    setchat(event.target.value);
  };
  return (
    <div className="chat-interface">
      <div className="chats-list">
        {chats.map((message, index, chats) => {
          if (index % 2 == 0)
            return (
              <LeftChat
                className={index == chats.length - 1 ? "animate-left" : ""}
              >
                <p>{message}</p>
              </LeftChat>
            );
          else
            return (
              <RightChat
                className={index == chats.length - 1 ? "animate-right" : ""}
              >
                <p>{message}</p>
              </RightChat>
            );
        })}
      </div>

      <form onSubmit={submitHandler}>
        <input type={"text"} value={chat} onChange={changeHandler}></input>
        <button className="submit-button" type="submit">
          <img className="submit-icon" alt="submit icon" src={sendicon}></img>
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;

//scroll
