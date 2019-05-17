import { combineReducers} from 'redux';
import { ADD_TODO,TOGGLE_TODO,SET_VISIBILITY_FILTER ,VisibilityFilters} from './actions.js'
const {SHOW_ALL} = VisibilityFilters;

function visibilityFilter (state = SHOW_ALL,action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos (state = [],action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id:action.id,
                    text:action.text,
                    completed:false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo) => {
                if(todo.id === action.id) {
                    return Object.assign({},todo,{
                        completed :!todo.completed
                    })
                }
                return todo
            })
        default:
            return state;
    }
}
const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;

// 同等于
/* export default function todoApp (state = [] ,action) {
    return {
        visibilityFilter:visibilityFilter(state.visibilityFilter,action),
        todos:todos(state.todos,action)
    }
} */
