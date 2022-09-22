import { Button, Checkbox } from '@mui/material';
import { FC } from 'react';
import style from './TodoListItem.module.sass';
import DeleteIcon from '@mui/icons-material/Delete';
import { ITodo } from '../store/todo';
import { observer } from 'mobx-react-lite';
import todo from '../store/todo'
const TodoListItem: FC<ITodo> = observer(({completed, id, title}) => {
  return (
    <div className={style.main}>
      <div className={style.checkbox}>
        <Checkbox checked={completed} onClick={() => todo.completeTodo(id)}/>
        {completed ? (
          <div>
            <s>{title}</s>
          </div>
        ) : (
          <div>{title}</div>
        )}
      </div>
      <div>
        <Button onClick={() => todo.deleteTodo(id)} color="warning">
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
});

export default TodoListItem;
