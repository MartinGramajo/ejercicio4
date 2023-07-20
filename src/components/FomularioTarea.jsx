import { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setListaTareas([...listaTareas, tarea]);
    setTarea("");
  };

  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Ingrese una Tarea"
              value={tarea}
              onChange={handleChange}
              type="text"
            />
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
