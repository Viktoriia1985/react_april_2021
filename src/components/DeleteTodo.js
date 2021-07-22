import { DELETE_TODO } from "../redux/redusers/actionType/actionType";
import { useDispatch } from "react-redux";
import {deleteTodo} from "../services/API";

export default function DeleteTodo({item}) {
    const dispatch = useDispatch()

    const handleDelete = async (e) => {
        e.preventDefault();
        dispatch({type: DELETE_TODO, payload: item.id});
        await deleteTodo(item.id);
    }

    return (
        <div>
            <form onSubmit={handleDelete}>
                <button type={"submit"}>delete todo</button>
            </form>
        </div>
    )
}