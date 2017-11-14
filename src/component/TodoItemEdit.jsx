import React from 'react';

export default class TodoItemEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    handleClick() {
        this.props.editTodo(this.state.value);
    }
    handleChange(e) {
        if (e.target.value) {
            this.setState({
                value: e.target.value
            })
        }
    }

    render() {
        return (
            <li className="todo-item" >
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input is-small"
                            type="text"
                            placeholder="Edit this todo"
                            value={this.state.value}
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className="control">
                        <a
                            className="button is-success is-small"
                            onClick={this.handleClick.bind(this)}
                        >
                            OK
            </a>
                    </div>
                </div>
            </li>
        );
    }

}