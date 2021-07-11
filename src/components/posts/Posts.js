import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from "react";
import Post from "../post/Post";

export default function Posts() {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const postsData = await response.json();

        dispatch({
            type: 'SET_POSTS',
            payload: postsData
        })
    }

    useEffect(() => {

        fetchPosts();
    }, [])

    return (
        <div>
            {posts.map(value => <Post key={value.id} item={value}/>)}
        </div>
    )
}
