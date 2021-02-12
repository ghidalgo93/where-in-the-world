import "../styles/App.css";
import n64 from "../images/pierre-roussel-n64-phone2.jpg";

function Home() {
  return (
    <img
      className={"img-pzl content"}
      src={n64}
      alt="n64 expolded with characters"
    />
  );
}

export default Home;
