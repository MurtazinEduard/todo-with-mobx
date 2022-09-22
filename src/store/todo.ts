import { makeAutoObservable } from 'mobx';

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

class Todo {
  todos = [
    { id: 1, title: 'Закончить писать туду', completed: true },
    { id: 2, title: 'Поговорить с hr АПРИКОД', completed: false },
    { id: 3, title: 'Устроиться к ним в компанию', completed: false },
  ];
  filter = 'all';
  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: ITodo) {
    this.todos.push(todo);
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((item) => item.id !== id);
  }
  deleteAllTodos() {
    this.todos = [];
  }
  completeTodo(id: number) {
    this.todos = this.todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item,
    );
  }
  get filtered() {
    switch (this.filter) {
      case 'all':
        return this.todos;
      case 'completed':
        return this.todos.filter((item) => item.completed);
      case 'pending':
        return this.todos.filter((item) => !item.completed);
      default:
        return this.todos;
    }
  }
}

export default new Todo();
