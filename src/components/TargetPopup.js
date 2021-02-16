import "../styles/App.css";
import crosshairs from "../images/crosshairs.png";

const TargetPopup = (props) => {
  const style = {
    top: props.coords[1],
    left: props.coords[0],
  };

  return (
    <div style={style} className={"modal"}>
      <img src={crosshairs} alt="crosshairs" />
    </div>
  );
};

export default TargetPopup;
