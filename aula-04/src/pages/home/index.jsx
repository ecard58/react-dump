import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <a href="https://google.com" target="_blank">
        Google
      </a>
      <Navbar />
    </>
  );
}

export default Home;
