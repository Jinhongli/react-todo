import React from 'react';

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    handleAdd(e) {
        if (e.keyCode) {
            if (e.keyCode === 13) {
                this.props.addTodo(this.state.value);
                this.setState({
                    value: ''
                });
            }
        } else {
            this.props.addTodo(this.state.value);
            this.setState({
                value: ''
            });
        }
    }
    handleInput(e) {
        this.setState({
            value: e.target.value
        });
    }
    render() {
        return (
            <div className="todo-input is-clearfix">
                <input
                    className="input is-pulled-left"
                    type="text"
                    placeholder="Add a todo"
                    value={this.state.value}
                    onChange={this.handleInput.bind(this)}
                    onKeyDown={this.handleAdd.bind(this)}
                />
                <a
                    className="button is-success is-pulled-right"
                    onClick={this.handleAdd.bind(this)}
                >Add</a>
            </div>
        );
    }
}