import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ tarea }) => {
  return (
    <>
      <ListGroup.Item className="d-flex justify-content-between">
        {tarea}
        <Button variant="danger">
          <FontAwesomeIcon className="fs-4" icon={faTrashAlt} />
        </Button>
      </ListGroup.Item>
    </>
  );
};

export default ItemTarea;
