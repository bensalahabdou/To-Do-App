import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from './actionType';

const initialState={
    todos:[]
}

const TodoReducer = (state = initialState , action) => {
switch(action.type){
    case ADD_TODO:
        return {
            ...state, 
            todos: [...state.todos, action.todo] 
        }
    case REMOVE_TODO:
        return {
            ...state, 
            todos: state.todos.filter(todo => todo.id !== action.id)
        }
    case EDIT_TODO:
        return {
            ...state, 
            todos: state.todos.filter(todo => todo.id !== action.id)
        }

        default:
            return state;
}
}

export default TodoReducer;