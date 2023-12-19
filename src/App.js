import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const new_value = e.target.value;
    setValue(new_value);
  };

  const addTodo = () => {
    if (value) {
      setTodos([...todos, value]);
      setValue('');
    }
  };

  return (
    <div className='container'>
      <h1 className='heading'>Todo List</h1>
      <div className='input-container'>
        <input type='text' value={value} onChange={handleChange} />
        <button onClick={addTodo}> Add Todo</button>
      </div>
      <div>
        <ol>
          {todos.map((todo, index) => {
            return <li key={index}> {todo} </li>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
