import {useState, useEffect} from 'react';
import {getPosts, getPost, getComments, getComment} from './services/API';
import Posts from "./components/posts/Posts";
import PostDetails from "./components/postDetails/PostDetails";
import Comments from "./components/comments/Comments";
import CommentDetails from "./components/commentDetails/CommentDetails";


export default function App() {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    const [comments, setComments] = useState([]);
    const [commentDetails, setCommentDetails] = useState(null);

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

    useEffect(() => {
        getComments().then(response => {
            setComments(response.data);
        });
    }, []);

    function selectComment(id) {
        console.log(id);
        getComment(id).then(({data}) => {
            setCommentDetails(data);
            console.log(data);
        });
    }


    return (
        <div>
            <div>
                <Posts items={posts} selectPost={selectPost}/>
                <hr/>
                {
                    postDetails && <PostDetails item={postDetails}/>
                }
            </div>

            <div>
                <Comments items={comments} selectComment={selectComment}/>
                <hr/>
                {
                    commentDetails && <CommentDetails item={commentDetails}/>
                }
            </div>


        </div>
    );
}

