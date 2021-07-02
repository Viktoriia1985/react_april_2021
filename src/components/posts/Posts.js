import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts, getPostsByUser} from "../../services/API";

export default function Posts({id}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        id
            ? getPostsByUser(id).then(({data}) => setPosts(data))
            : getPosts().then(({data}) => setPosts(data))
    },[id])

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} item={post}/>)
            }
        </div>
    );
}
