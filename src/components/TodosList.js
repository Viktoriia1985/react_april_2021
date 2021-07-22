import {useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";
import {ADD_TODOS, IS_LOADING_FALSE, IS_LOADING_TRUE} from "../redux/redusers/actionType/actionType";
import SingleTodo from "./singleTodo";
import {getTodos} from "../services/API";


export default function TodosList() {
    const dispatch = useDispatch();
    const {todos, isLoading} = useSelector(({todosReduser}) => todosReduser)

    useEffect(() => {
        fetchTodos();
    }, [])

    const fetchTodos = async () => {
        try {
            dispatch({type:IS_LOADING_TRUE})
            const data = await getTodos();
            dispatch({type: ADD_TODOS, payload: data})
        } catch (e) {
            console.log(e)
        } finally {
            dispatch({type: IS_LOADING_FALSE})
        }
    }

    if(isLoading) return <h1>LOADING.......</h1>

    return (
        <div>
            {
                todos.map(value => <SingleTodo key={value.id} item={value}/>)
            }
        </div>
    )
}