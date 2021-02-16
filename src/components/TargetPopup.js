import "../styles/App.css";
import crosshairs from "../images/crosshairs.png";

const TargetPopup = (props) => {
  const positionStyle = {
    top: props.coords[1] - 40,
    left: props.coords[0] - 40,
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
