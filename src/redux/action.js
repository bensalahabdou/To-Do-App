import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from './actionType';

export const addTodo = newTodo => {
    return{
        type:ADD_TODO,
        todo: newTodo
    }
};

export const removeTodo = id => {
    return{
        type:REMOVE_TODO,
        id
    }
};

export const editTodo = id => {
    return{
        type:EDIT_TODO,
        id
    }
};