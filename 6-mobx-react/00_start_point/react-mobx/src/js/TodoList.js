 import React from "react";
 import { observer } from "mobx-react";

 @observer
 export default class TodoList extends React.Component {
  createNew(e) {
    if (e.which === 13) { // enter
      this.props.store.createTodo(e.target.value);
      e.target.value = "";
    }
  }

  filter(e) {
    this.props.store.filter = e.target.value;
  }

  toggleComplete(todo) {
    todo.complete = !todo.complete;
  }

  clear(todo) {
      delete this.props.store.todos.todo;
  }

   render() {
    const { clearComplete, filter, filteredTodos, todos } = this.props.store;

    const todoList = filteredTodos.map(todo => (
       <li key={todo.id}>
              <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />
              {todo.value}
       </li>
      ));
    return <div>
      <h1>todos</h1>
      <input class="create" onKeyPress={this.createNew.bind(this)} />
      <input class="filter" value={filter} onChange={this.filter.bind(this)} />
      <ul>{todoList}</ul>
      <a href="#" onClick={clearComplete}>Clear Complete</a>
    </div>;
   };
 }
