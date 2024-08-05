import {createContext, useContext} from 'react';

export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todo : "Todo mesg",
            complited : false,
        },
    ],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleComplited : (id) => {},
 });

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;