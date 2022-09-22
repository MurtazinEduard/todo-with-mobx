import { Button, Divider } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { FC} from 'react';
import style from './App.module.sass';
import AddTodo from './components/AddTodo';
import TodoListItem from './components/TodoListItem';
import todo from './store/todo'
const App: FC = observer( () => {
  const clearAll = () => {
    if (window.confirm('Вы точно хотите удалить все задачи?')) {
      todo.deleteAllTodos()
    }
  }
  return (
    <div className={style.App}>
      <div className={style.wrapper}>
        <div className={style.header}>
          <h1>АПРИКОД</h1>
        </div>
        <div className={style.todo}>
          <AddTodo />
          <div className={style.todo_buttons}>
            <div>
              <Button onClick={() => todo.filter = 'all'} variant="text">All</Button>
              <Button onClick={() => todo.filter = 'pending'} variant="text">Pending</Button>
              <Button onClick={() => todo.filter = 'completed'} variant="text">Completed</Button>
            </div>
            <div className={style.todo_buttons__clear}>
              <Button onClick={clearAll} variant='outlined'>Clear All</Button>
            </div>
          </div>
          <Divider sx={{ m: 2 }} light />
          <div className={style.todo_list}>
            {todo.filtered.map(item => 
              <TodoListItem key={item.id} {...item}/>
              )}
          </div>
        </div>
      </div>
    </div>
  );
})

export default App;
