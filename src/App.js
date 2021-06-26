import {useState, useEffect} from 'react';
import {getPosts, getPost} from './services/API';
import Posts from "./components/posts/Posts";
import PostDetails from "./components/postDetails/PostDetails";


export default function App() {

    let [posts, setPosts] = useState([]);
    let [postDetails, setPostDetails] = useState(null);


    useEffect(() => {
        getPosts().then(response => {
            setPosts(response.data);
        });
    }, []);

    function selectPost(id) {
        console.log(id);
        getPost(id).then(({data}) => {
            setPostDetails(data);
            console.log(data);
        });
    }


    return (
        <div>
            <Posts items={posts} selectPost={selectPost}/>
            <hr/>
            {
               postDetails && <PostDetails item={postDetails}/>
            }
        </div>
    );
}


