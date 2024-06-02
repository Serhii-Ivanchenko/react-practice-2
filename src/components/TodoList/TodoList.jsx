import { Grid, GridItem, TodoListItem } from 'components';

export const TodoList = ({todos, onDelete}) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoListItem id={todo.id} text={todo.text} number={index+1} onDelete = {onDelete} />
        </GridItem>
      ))}
    </Grid>
  );
};
