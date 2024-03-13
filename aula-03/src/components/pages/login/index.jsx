import React, { useState } from "react";
import atividadeLogo from "../../login/logo.png";
import "./style.css";

function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const logar = () => {
    const infos = {
      login: login,
      senha: senha,
    };
    console.log(infos);
    setLogin("");
    setSenha("");

    localStorage.setItem("info", JSON.stringify(infos));
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
    </>
  );
}

export default Login;
