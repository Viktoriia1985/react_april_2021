import {useState, useEffect} from 'react';
import Post from "../post/Post";

export default function Posts() {

    const [postsList, setPostsList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(response => {
                console.log(response);
                setPostsList(response);
            });
    }, []);

    return (
        <div>
            {
                postsList.map(mainValue => <Post value={mainValue}/>)
            }
        </div>
    );
}





