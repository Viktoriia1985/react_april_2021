import DeleteTodo from "./DeleteTodo";
import { useDispatch } from "react-redux";
import { CHANGE_STATUS } from "../redux/redusers/actionType/actionType";
import {changeTodo} from "../services/API";

export default function SingleTodo({ item }) {
    const dispatch = useDispatch();

    const statusHandler = async (id) => {
        dispatch({ type: CHANGE_STATUS, payload: item.id });
        await changeTodo(id, { completed: true })
    }

    return (
        <div>
            <h4>title: {item.title}</h4>
            <p>description: {item.description}</p>
            <p>completed: {item.completed.toString()}</p>
            <hr/>
            <DeleteTodo item={item}/>
            {
                !item.completed && <button onClick={() => statusHandler(item.id)}>Change status</button>
            }
            <hr/>
        </div>
    )
}