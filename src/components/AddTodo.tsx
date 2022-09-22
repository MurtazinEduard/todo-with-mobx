import { Button, InputAdornment, TextField } from '@mui/material';
import { FC } from 'react';
import style from './AddTodo.module.sass';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import todo from '../store/todo'
const AddTodo: FC = () => {
  const [text, setText] = useState('')
  const handleAddTodo = () => {
    const item = {
      id: Date.now(),
      title: text,
      completed: false
    }
    todo.addTodo(item)
    setText('')
  }
  return (
    <div className={style.main}>
      <TextField
        fullWidth
        label="add new task"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FormatAlignLeftIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Button onClick={handleAddTodo} disabled={text.length < 1}>
                <AddIcon />
              </Button>
            </InputAdornment>
          ),
        }}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </div>
  );
};

export default AddTodo;
