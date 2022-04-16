import "./RightChat.css";
const RightChat = (props) => {
  return (
    <div className={"messagebox-right "+(props.className)}>
      <div className="box-right">{props.children}</div>
      <div className="triangle-right"></div>
    </div>
  );
};

export default RightChat;
