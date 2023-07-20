import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  return (
    <>
      <Container>
        <Form>
          <InputGroup className="mb-3">
            <Form.Control placeholder="Ingrese una Tarea" type="text" />
            <Button
              className="btn-agregar-tarea"
              variant="outline-primary"
              type="submit"
            >
              <FontAwesomeIcon className="fs-4" icon={faPlusCircle} />
            </Button>
          </InputGroup>
        </Form>
        <ListaTareas />
      </Container>
    </>
  );
};

export default FormularioTarea;
