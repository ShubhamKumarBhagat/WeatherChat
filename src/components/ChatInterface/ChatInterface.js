import "./ChatInterface.css";
import LeftChat from "../LeftChat/LeftChat";
import RightChat from "../RightChat/RightChat";
import sendicon from "../../../src/send-button-icon.png";
import { useState } from "react";

const ChatInterface = () => {
  const url =
    "https://api.weatherbit.io/v2.0/current?key=581c21bacaea402d963cdfc7241d3d48";
  function fetchweather(location) {
    fetch(url + "&city=" + location)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw new Error("err");
        setchats((prev) => {
          return [
            ...prev.slice(0, prev.length - 1),
            "Weather description: " +
              data.data[0].weather.description +
              ". The temperature is " +
              data.data[0].temp +
              " degree Celcius and it feels like " +
              data.data[0].app_temp +
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
