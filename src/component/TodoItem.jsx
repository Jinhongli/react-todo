import React from 'react';
import TodoItemEdit from './TodoItemEdit.jsx';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        };
    }

    handleEdit() {
        this.setState({
            edit: true
        });
    }
    editTodo(value) {
        this.setState({
            edit: false
        });
        this.props.handleEdit(value);
    }

    render() {
        return !this.state.edit ?
            (
                <li className={this.props.todo.checked ? 'todo-item check' : 'todo-item'} >
                    <input className="todo-item-check" type="checkbox" onClick={this.props.handleCheck.bind(this, this.props.todo.id)} />
                    {this.props.todo.content}
                    <a className="is-pulled-right" onClick={this.props.handleDelete.bind(this, this.props.todo.id)}>
                        <span className="icon has-text-danger">
                            <i className="fa fa-minus-square"></i>
                        </span>
                    </a>
                    <a className="is-pulled-right" onClick={this.handleEdit.bind(this)}>
                        <span className="icon has-text-info">
                            <i className="fa fa-pencil-square"></i>
                        </span>
                    </a>
                </li>
            ) :
            (
                <TodoItemEdit value={this.props.todo.content} editTodo={this.editTodo.bind(this)} />
            );
    }
}