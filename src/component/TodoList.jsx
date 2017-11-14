import React from 'react';
import TodoItem from './TodoItem.jsx';

export default class TodoList extends React.Component {

    handleDelete(id) {
        this.props.deleteTodo(id);
    }
    handleCheck(id) {
        this.props.checkTodo(id);
    }
    handleEdit(id, value) {
        this.props.editTodo(id, value);
    }

    render() {
        const todoItems = this.props.todos.map((todo) => (
            <TodoItem
                key={todo.id}
                todo={todo}
                handleDelete={this.handleDelete.bind(this)}
                handleCheck={this.handleCheck.bind(this)}
                handleEdit={this.handleEdit.bind(this, todo.id)} />
        ));
        console.log(this.props.todos)
        return (
            <ul className="todo-items">
                {todoItems}
            </ul>
        )
    }
}