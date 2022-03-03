import { useContext } from "react";
import TodoContext from "./TodoContext";
const TodoList = () => {
    let valuesAll = useContext(TodoContext)
    return (
        <div>
            {
                valuesAll.state.map((val, index) => {
                    return (
                        <div className="m-3">
                            <h4 className="eachTODO" >{val.todo}</h4>
                            <h6 className={val.status}>{val.status}</h6>
                            <button  className="btn btn-warning" onClick={() => {
                                valuesAll.dispatch({type:'deleteThisTodo', indexToDel:index})
                            }}>Delete This</button>
                        </div>
                        
                    )

                })
            }
        </div>

    )
}
export default TodoList