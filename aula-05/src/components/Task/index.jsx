import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  FcMediumPriority,
  FcHighPriority,
  FcLowPriority,
} from "react-icons/fc";

function Task({ item, excluirTarefa }) {
  const escolhePrioridade = (prioridade) => {
    switch (prioridade) {
      case "alta":
        return <FcHighPriority />;
      case "normal":
        return <FcMediumPriority />;
      case "baixa":
        return <FcLowPriority />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <Card.Header>
        {escolhePrioridade(item.prioridade)}
        {item.title}
      </Card.Header>
      <Card.Body>
        <Card.Text>{item.description}</Card.Text>
        <Button variant="primary" onClick={() => editarTarefa(item.id)}>
          Editar
        </Button>
        <Button variant="danger" onClick={() => excluirTarefa(item.id)}>
          Excluir
        </Button>
      </Card.Body>
    </Card>
  );
}
export default Task;

// <div key={item.id}>
//   <h3>{item.title}</h3>
//   <button onClick={() => excluirTarefa(item.id)}>Excluir</button>
// </div>
