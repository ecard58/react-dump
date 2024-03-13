import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  //let nome = "Vite + React";
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState(0);

  const prova = () => {
    console.log("Eu sou a função prova");
    setCount(count + 1);
    //setNome("Alterei o nome na tela");
    setNome("Alterei o nome na tela");
  };

  const cadastrar = () => {
    const infos = {
      nome: nome,
      email: email,
      idade: idade,
    };
    console.log(infos);
    setNome("");
    setIdade(0);
    setEmail("");

    localStorage.setItem("info", JSON.stringify(infos));
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Digite as informações</h1>
      <div>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Digite sua idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={prova}>count is {count}</button>
      <div className="card">
        <button onClick={cadastrar}>Cadastrar</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
