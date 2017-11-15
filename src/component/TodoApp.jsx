import React from 'react';
import uuidV1 from 'uuid/v1';

import TodoList from './TodoList.jsx';
import AddTodo from './AddTodo.jsx';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    content: 'Eat',
                    checked: false,
                    id: uuidV1()
                }
            ]
        };
    }

    addTodo(value) {
        this.setState({
            todos: [...this.state.todos, {
                content: value,
                checked: false,
                id: uuidV1()
            }]
        })
    }

    deleteTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    checkTodo(id) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (id === todo.id) {
                    todo.checked = !todo.checked;
                }
                return todo;
            })
        })
    }
    editTodo(id, value) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (id === todo.id) {
                    todo.content = value;
                }
                return todo;
            })
        });
    }

    render() {
        return (
            <div>
                <h1 className="has-text-centered is-size-3">Todo App</h1>
                <AddTodo
                    addTodo={this.addTodo.bind(this)}
                />
                <TodoList
                    todos={this.state.todos}
                    deleteTodo={this.deleteTodo.bind(this)}
                    checkTodo={this.checkTodo.bind(this)}
                    editTodo={this.editTodo.bind(this)}
                />
            </div>
        );
    }
}