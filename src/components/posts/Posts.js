import Post from "../post/Post";

export default function Posts(props) {
let {items, selectPost} = props;

    return (
        <div>
            {
                items.map(post => <Post key = {post.id} item={post} selectPost={selectPost}/>)
            }
        </div>
    );
}

