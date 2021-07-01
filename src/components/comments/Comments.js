import Comment from "../comment/Comment";


export default function Comments(props) {
    let {items, selectComment} = props;

    return (
        <div>
            {
                items.map(comment => <Comment key = {comment.id} item={comment} selectComment={selectComment}/>)
            }

        </div>
    );
}