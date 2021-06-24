import './Posts.css';
 import {useState, useEffect} from 'react';

export default function Posts() {

 let [postsList, setPostsList] = useState([]);


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

             {postsList
                 .map(value => <div> {value.userId} {value.id}
                     {value.title} {value.body}</div>)
             }

         </div>
     );
 }





