import {getUserPosts} from '../../services/UserServices';
import {useState} from 'react';

export default function User({item}) {
    const [posts, setPosts] = useState([]);
    return (
        <div>
            {item.name}
            <button onClick={() => {
                getUserPosts(item.id).then(value => setPosts([...value.data]));
            }}> show posts
            </button>
            {
                posts.map(value => <div key={value.title}>{value.id} - {value.title}
                    <hr/>
                </div>)
            }
        </div>
    );
}

