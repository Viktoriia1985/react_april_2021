import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from "react";
import Post from "../post/Post";
import {getPosts} from "../../services/API";

export default function Posts() {
    const posts = useSelector(({posts}) => posts);
    const dispatch = useDispatch();

    const fetchPosts = async () => {
        const {data} = await getPosts();
        dispatch({type: 'SET_POSTS', payload: data})
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
