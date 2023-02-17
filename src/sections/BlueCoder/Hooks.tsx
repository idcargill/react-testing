import React, { useState, useEffect, useReducer, useRef, useCallback } from 'react';

enum ActionTypes {
  add = "ADD",
  remove = "REMOVE",
}

interface Payload {
  text: string;
}

interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

type AddTodo = {
  type: ActionTypes.add;
} & ToDo

type RemoveTodo = {
  type: ActionTypes.remove;
} & Pick<ToDo, 'id'>;


type ActionType = AddTodo | RemoveTodo;

const reducerFunction = (items: ToDo[], action: ActionType) => {
  switch (action.type) {
    case ActionTypes.add:
      return [
        ...items,
        {
         id: action.id,
         text: action.text,
         completed: action.completed,
        }
      ];
    case ActionTypes.remove:
      return items.filter((item) => item.id !== action.id);
  }
};


const ReactHooksExample = () => {
  const [ state, setState ] = useState<Payload | null>(null);
  const [ indexCount, setIndexCount ] = useState(0);
  const [ details, dispatch ] = useReducer(reducerFunction, []);
  const toDoRef = useRef<HTMLInputElement | null>(null);


  useEffect(() => {
    setState({ text: 'I am a payload' });
  }, []);

  const addToDo = useCallback(() => {
    if (toDoRef.current) {
      dispatch({
        id: indexCount,
        type: ActionTypes.add,
        text: toDoRef.current.value,
        completed: false,
      });
      setIndexCount((prev) => prev += 1);
      toDoRef.current.value = '';
    }

  }, [indexCount]);

  return (
    <div style={{ padding: '1em', margin: '.5em 1em', border: '1px solid green'}}>
      {state?.text}

      <input type="text" ref={toDoRef} onKeyDown={(e) => {
        if (['Enter'].includes(e.code)) {
          addToDo();
        }
      }}/>
      <button onClick={addToDo}
    >
        Add</button>
      <ul>

      {details.map((todo) => (
        <li style={{margin: '5px', padding: '5px', border: '1px solid red', borderRadius: '10px', cursor: 'pointer'}}
          key={todo.id}
          onMouseOver={() => console.log(this)}
          onClick={()=> dispatch({ type: ActionTypes.remove, id: todo.id })}
        >
          {todo.text}
        </li>
      ))}
      </ul>
    </div>
  );
};

export default ReactHooksExample;

