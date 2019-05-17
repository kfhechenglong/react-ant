import React, { Component }  from 'react';
import PropType from 'prop-types'
import TodoItem from './TodoItem'
class TodoList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {todos,toggleTodo} = this.props;
        return (
            <ul>
                {todos.map((todo) => {
                    return (
                        <TodoItem key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)}/>
                    )
                })}
            </ul>
        );
    }
}
TodoList.propTypes = {
    todos:PropType.arrayOf(
        PropType.shape({
            id:PropType.number.isRequired,
            completed:PropType.bool.isRequired,
            text:PropType.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo:PropType.func.isRequired
}  
export default TodoList;
