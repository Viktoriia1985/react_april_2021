import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { IS_LOADING_FALSE, IS_LOADING_TRUE, PUSH_NEW_TODO } from "../redux/redusers/actionType/actionType";
import {createTodo} from "../services/API";



export const CreateTodoForm = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(({todosReduser: {isLoading}}) => isLoading);

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!title || !description) return;
        try{
            dispatch({type: IS_LOADING_TRUE});

            const createdTodo = await createTodo({title, description});

            dispatch({ type: PUSH_NEW_TODO, payload: createdTodo })

            setTitle('')
            setDescription('')
        }catch (e){
            console.log(e)
        }finally {
            dispatch({type: IS_LOADING_FALSE})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   placeholder="title"
                   value={title}
                   onChange={({target:{value}}) =>setTitle(value)}/><br/>
            <input type="text"
                   placeholder="description"
                   value={description}
                   onChange={({target:{value}})=>setDescription(value)} /><br/>
            <button type="submit" disabled={!title || !description || isLoading}>create todo</button>
        </form>
    )
}