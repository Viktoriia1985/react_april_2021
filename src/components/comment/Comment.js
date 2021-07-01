export default function Comment(props) {
    let {item, selectComment} = props;
    return (
        <div>
            {item.id} - {item.name} - {item.email} - {item.body}
            -
            <button onClick={() => {
                selectComment(item.id)
            }}>comment</button>
        </div>
    );
}
