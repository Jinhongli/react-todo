import React from 'react';

export default class TodoItemEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            originalValue: this.props.originalValue
        };
    }

    handleClick(e) {
        if (e.keyCode) {
            if (e.keyCode === 13) {
                this.props.editTodo(this.state.value || this.state.originalValue);
            }
        } else {
            this.props.editTodo(this.state.value || this.state.originalValue);
        }
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <li className="todo-item is-clearfix" >
                <input
                    autoFocus
                    className="input is-small is-pulled-left"
                    type="text"
                    placeholder="Edit this todo"
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                    onKeyDown={this.handleClick.bind(this)}
                />
                <a
                    className="button is-primary is-small is-pulled-right"
                    onClick={this.handleClick.bind(this)}
                >
                    <i className="fa fa-check"></i>
                </a>
            </li>
        );
    }

}