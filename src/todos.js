import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    console.log(event);
    event.preventDefault(); //submit과 동시에 새로 이동되는것을 막아준다.
    if (toDo === "") {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    setTodo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My toDos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} type='string' onChange={onChange}></input>
        <button>Enter</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
