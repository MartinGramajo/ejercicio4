import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ listaDeTareas }) => {
  return (
    <ListGroup>
      {listaDeTareas.map((tarea, index) => (
        <ItemTarea tarea={tarea} key={index} />
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
