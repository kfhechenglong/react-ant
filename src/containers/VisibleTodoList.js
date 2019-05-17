import {connect } from 'react-redux'
import {toggleTodo} from './../store/actions'
import TodoList from './../components/TodoList.js'
const getVisibleTodos = (todos,filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
    }
};
const mapStateToProps = state => {
    return {
        todos:getVisibleTodos(state.todos,state.visibilityFilter)
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo:(id) => {
            dispatch(toggleTodo(id))
        }
    }
};
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
export default VisibleTodoList;