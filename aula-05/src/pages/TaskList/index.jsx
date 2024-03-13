import { useState, useEffect } from "react";
import axios from "axios";
import Task from "../../components/Task/index";
import CreateTask from "../../components/Task/CreateTask";

const url = "https://6542c27001b5e279de1f8a8c.mockapi.io/tasklist";

const TaskList = () => {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const [loading, setLoading] = useState(false);

  const cadastrar = async () => {
    const task = {
      title: novaTarefa,
      description: "description",
      prioridade: "prioridade",
      done: false,
    };
    try {
      const { data } = await axios.post(url, task);
      console.log(data);
      setTarefas([...tarefas, data]);
      //console.log([...tarefas, novaTarefa]);
      setNovaTarefa("");
    } catch (err) {
      console.log(err);
    }
  };

  const editarTarefa = async (id) => {
    const task = {
      title: novaTarefa,
      description: "description",
      prioridade: "prioridade",
      done: false,
    };
    try {
      const { data } = await axios.post(url + "/" + id, task);
      const arrayEditado = tarefas.map((item) => {
        if (id == item.id) {
          // return {
          //   id: item.id,
          //   title: item.title,
          //   description: item.description,
          //   prioridade: "alta",
          //   done: false,
          // };
          return data;
        } else {
          return item;
        }
      });
      setTarefas(arrayEditado);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const excluirTarefa = async (id) => {
    try {
      console.log("Excluir tarefa: ", id);
      const { data } = await axios.delete(`${url}/${id}`);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    const novoArray = tarefas.filter((item) => item.id != id);
    setTarefas(novoArray);
  };

  const getTasks = async () => {
    setLoading(true);
    try {
      // const dados = await fetch(
      //   "https://6542c27001b5e279de1f8a8c.mockapi.io/tasklist"
      // );
      // const infos = await dados.json;
      const { data } = await axios.get(url);
      console.log(data);
      setTarefas(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // o useeffect é executado logo apos a montagem  do componente na tela
  // estrutura: useEffect (()=>{}, [])
  useEffect(() => {
    getTasks();
  }, []);

  // usar isso aqui no trabalho !!
  // if (loading) return <h1>carregando...</h1>;

  return (
    <main>
      <h1>Lista de Tarefas</h1>
      <button onClick={getTasks} disabled={loading}>
        getTasks
      </button>
      <section>
        <CreateTask
          novaTarefa={novaTarefa}
          setNovaTarefa={setNovaTarefa}
          cadastrar={cadastrar}
        />
      </section>

      <section>
        <h2>Lista de tarefas</h2>
        {tarefas.map((item) => (
          <Task
            key={item.id}
            item={item}
            excluirTarefa={excluirTarefa}
            editarTarefa={editarTarefa}
          />
        ))}
      </section>
    </main>
  );
};

export default TaskList;
