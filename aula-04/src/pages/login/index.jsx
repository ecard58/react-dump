import React, { useState } from "react";
import atividadeLogo from "./img/logo.png";
import "./style.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const dados = {
  login: "emanuel",
  senha: "123",
};

function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();
  const { parametro } = useParams();
  console.log(parametro);
  const { state } = useLocation();
  console.log(state);

  const logar = () => {
    if (login == "" || senha == "") {
      console.log("Preencha os compos de login e senha");
    } else if (login == dados.login && senha == dados.senha) {
      const infos = {
        login: login,
        senha: senha,
      };
      console.log(infos);
      setLogin("");
      setSenha("");

      localStorage.setItem("info", JSON.stringify(infos));

      navigate("/home/" + login);
    } else {
      console.log("Login ou senha inválidos");
    }
  };

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={atividadeLogo} className="logo" alt="atividade logo" />
        </a>
      </div>

      <h1>Login</h1>

      {/* insere o campo de login */}
      <div>
        <input
          type="text"
          placeholder="Digite seu login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          style={{ margin: 10, padding: 8 }}
        />
      </div>

      {/* insere o campo senha */}
      <div>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{ margin: 10, padding: 8 }}
        />
      </div>

      {/* insere o botão de login */}
      <button onClick={logar} style={{ margin: 10, padding: 10 }}>
        Fazer Login
      </button>

      <Navbar />
    </>
  );
}

export default Login;
