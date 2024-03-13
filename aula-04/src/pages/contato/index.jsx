import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import { useNavigate } from "react-router-dom";

function Contato() {
  const navigate = useNavigate();
  const parametro = "eu sou um parametro";

  const handleClick = () => {
    navigate("/login/" + parametro, {
      state: { info: "eu sou uma informação" },
    });
  };

  return (
    <>
      <h1>Contato</h1>
      <button onClick={handleClick}>Login</button>
      <Navbar />
    </>
  );
}

export default Contato;
