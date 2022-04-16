import "./LeftChat.css";
const LeftChat = (props) => {
  return (
    <div className={"messagebox-left "+(props.className)}>
      <div className="triangle-left"></div>
      <div className="box-left">{props.children}</div>
    </div>
  );
};

export default LeftChat;
