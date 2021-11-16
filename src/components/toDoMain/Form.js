import React from "react";
import { Container, Row } from "react-bootstrap";

function Form({ setInputText, todos, setTodos, inputText, setStatus }) {
  const inputTextHandler = e => {
    //console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitToDoHandler = e => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = e => {
    setStatus(e.target.value);
  };
  return (
    <Container>
      <Row>
        <form>
          <input
            style={{ width: "250px" }}
            value={inputText}
            onChange={inputTextHandler}
            type="text"
            className="todo-input"
          />
          <button
            onClick={submitToDoHandler}
            className="todo-button"
            type="submit"
          >
            <i className="fas fa-plus-square"></i>
          </button>

          <div className="select">
            <select
              onChange={statusHandler}
              name="todos"
              className="filter-todo"
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>
      </Row>
    </Container>
  );
}

export default Form;
