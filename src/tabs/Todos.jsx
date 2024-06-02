import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('saved-todos')) || [],
  );

  useEffect(() => {
    localStorage.setItem('saved-todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = text => {
    const isExist = todos.find(
      todo => todo.text.toLowerCase() === text.toLowerCase(),
    );
    if (isExist) {
      alert('todo already exists');
      return;
    }
    const todo = {
      text,
      id: nanoid(),
    };
    setTodos(prevState => [...prevState, todo]);
  };

  const handleDelete = id => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
      {todos.length === 0 ? (
        <Text textAlign="center">There are no any todos ...</Text>
      ) : (
        <TodoList todos={todos} onDelete={handleDelete} />
      )}
    </>
  );
};
