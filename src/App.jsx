import { useCallback, useState } from 'react'
import Todos from './Components/Todos';


const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(c => c + 1);
  };
  
  const addTodo = useCallback(() => {
    setTodos (t => [...t, "praying"]);
    increment();
  },[increment]);


  return (
    <>
    <Todos todos = {todos} addTodo= {addTodo}/>
    <div className='text-center text-center mt-20 text-xl border-2 border-solid border-black bg-slate-300 text-black font-semibold'>
      Count: {count}
      <button onClick= {increment}></button>
    </div> 
    </>  
  );
};

export default App
