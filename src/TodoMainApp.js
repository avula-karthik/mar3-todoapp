import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoContext from "./TodoContext";
import { useReducer } from "react";
import ReducerTodo from "./ReducerTodo";
const TodoMainApp = () => {
    const myTodos = [{todo:'Listening your Fav song', status:'done'}, {todo:'Doing your Homework', status:'notdone'}]
    const [state, dispatch] = useReducer(ReducerTodo, myTodos)
    const valuesAll = {state, dispatch}
    return(
        <div>
            <TodoContext.Provider value={valuesAll}>
                <TodoForm />
                <TodoList />
            </TodoContext.Provider>
             
        </div>   
    )
}
export default TodoMainApp