import { Titulo } from "./styledComponents";

const CreateTask = ({ novaTarefa, setNovaTarefa, cadastrar }) => {
  return (
    <div>
      <Titulo>Cadastre sua tarefa</Titulo>
      <h2>Cadastre sua tarefa</h2>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button onClick={cadastrar} className="btn btn-primary m-4">
        Cadastrar
      </button>
    </div>
  );
};

export default CreateTask;
