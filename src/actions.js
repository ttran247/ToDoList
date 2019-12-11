import TodoList from "./TodoList";

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLEAR_COMPLETED_TODOS= 'CLEAR_COMPLETED_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETED_TODOS = 'DELETED_TODOS';

export const toggleTodo = todoIdToggle => {
    return {

        type: TOGGLE_TODO,
        payload: todoIdToggle
    };
};   
 
export const addTodo = (todoTitle) => {  
   const newTodo ={
       userId: 1,
       id: Math.floor(Math.random() * 10000),
       title: todoTitle,
       completed: false
    };
       return {
        type: ADD_TODO,
        payload: newTodo
    };
};

export const clearCompletedTodos = () => {
    return {
        type: CLEAR_COMPLETED_TODOS
    };
};

export const deleteToDos = todoIdToggle => {
    return {
        type: DELETED_TODOS,
        payload: todoIdToggle
    };
};




