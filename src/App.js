import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const getDate = () => {
  let today = new Date();
  let date = today.toLocaleString();
  return date;
}

function createBulkTodos(){
  const array = [];

  for(let i=1; i<=5000 ; i++){
    array.push({
      id: i,
      text: `할일 ${i}`,//${}이건머지 template literal 자리표시자라는데 
      checked: false,
      currentDate: getDate(),
    });
  }

  return array;
}

const App = () => {

  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: 'todo1',
  //     checked : true,
  //     currentDate : getDate()
  //   },
  //   {
  //     id: 2,
  //     text: 'todo2',
  //     checked : true,
  //     currentDate : getDate()
      
  //   },
  //   {
  //     id: 3,
  //     text: 'todo3',
  //     checked : true,
  //     currentDate : getDate()
  //   }
  // ]);

  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(5001);

  //TodoInsert 컴포넌트로 보낼 함수
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
        currentDate: getDate()
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  //삭제 
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  )

  //수정 
  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => 
          todo.id === id ? {...todo, checked: !todo.checked} : todo,),
      );
    },[todos]
  );

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
      
    </div>
  
    );
};

export default App;