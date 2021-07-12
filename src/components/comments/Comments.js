import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Comment from "../comment/Comment";
import {getComments} from "../../services/API";

export default function Comments() {
    const comments = useSelector(({comments}) => comments);
    const dispatch = useDispatch();

    const fetchComments = async () => {
        const {data} = await getComments();
        dispatch({type: 'SET_COMMENTS', payload: data})
    }

    useEffect(() => {
        fetchComments()
    }, [])

    return (
        <div>
            {comments.map(value => <Comment key={value.id} item={value}/>)}
        </div>
    )
}