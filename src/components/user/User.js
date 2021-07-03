
import {useState} from 'react';
import {getUserPosts} from "../../services/UserService";

export default function User({item}) {

    let [posts, setPosts] = useState([]);
    return (
        <div>
            {item.name}
            <button onClick={() => {
                getUserPosts(item.id).then(value => setPosts([...value.data]));

            }}> show posts
            </button>
            {
                posts.map(value => <div key={value.title}>{value.title}</div>)
            }

        </div>
    );
}
