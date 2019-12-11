import todosList from "./todos.json";
import { TOGGLE_TODO, CLEAR_COMPLETED_TODOS, ADD_TODO, DELETED_TODOS } from "./actions";

const initialState = {
        todos: todosList
      };
 
const reducer = (state = initialState, action) => {
/* how to modify state? */
switch (action.type) {
    case TOGGLE_TODO:{

        const newToDoList = state.todos.map(todo => {
            if (todo.id ===  action.payload) {
                const newTodo = { ...todo };
                newTodo.completed = !newTodo.completed;
                return newTodo; 
            }
            return todo; 
        }); 
        return {...state, todos: newToDoList };
    };
 
     case ADD_TODO:  {
        //   const newTodoList = state.todos. slice();
        //  newTodoList.push(action.payload);
         return  {...state, todos: [...state.todos,action.payload]};
        };
              
    
     
    
    
    case CLEAR_COMPLETED_TODOS: {
        return {
        ...state, 
        todos: state.todos.filter(todo => todo.completed === false)};
            
        };
    
    
    case DELETED_TODOS:{
        const newToDoList = state.todos.filter(todo => todo.id !== action.payload)
        return {
            ...state, todos: newToDoList
            
        };
    
         
    }  
    default: 
        return state;
};
}

export default reducer;