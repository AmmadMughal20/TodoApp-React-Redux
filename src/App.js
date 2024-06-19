import './App.css';
import AddTodo from './components/addTodo';
import Todos from './components/todos';

function App() {
  return (
    <div className="App">
      <h1>The Todo App</h1>
      <div className='main-div'>
        <div className='add-div'>
          <AddTodo />
        </div>
        <div className='todos-div'>
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
