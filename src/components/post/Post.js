export default function Post(props) {
    let {item, selectPost} = props;
    return (
        <div>
            {item.id} - {item.title} - {item.body}
            -
            <button onClick={() => {
                selectPost(item.id)
            }}>click me</button>
        </div>
    );
}
