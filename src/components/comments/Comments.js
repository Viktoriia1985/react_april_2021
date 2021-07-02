import Comment from "../comment/Comment";
import {useEffect, useState} from "react";
import {getComments, getCommentsFromPost} from "../../services/API";

export default function Comments({id}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        id
            ? getCommentsFromPost(id).then(({data}) => setComments(data))
            : getComments().then(({data}) => setComments(data))
    },[id])

    return (
        <div>
            {
                comments.map(comment => <Comment key = {comment.id} item={comment}/>)
            }
        </div>
    );
}