import "../styles/App.css";
import crosshairs from "../images/crosshairs.png";

const TargetPopup = (props) => {
  const height = 80;
  const positionStyle = {
    height: height,
    width: height,
    left: props.coords.x - height / 2,
    top: props.coords.y - height / 2,
  };

  return (
    <img
      className={"modal target"}
      style={positionStyle}
      src={crosshairs}
      alt="crosshairs"
    />
  );
};

export default TargetPopup;
