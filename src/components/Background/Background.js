import './Background.css';
const Background=(props)=>{
    return (
        <div className={'background '+(props.className)}>
        {props.children}
      </div>
    );
};

export default Background;