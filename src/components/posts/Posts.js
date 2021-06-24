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
         <div className="wrap">

             {postsList
                 .map(value => <div>
                     <br/>
                     postsId - {value.userId} <br/>
                     id - {value.id} <br/>
                     title - {value.title} <br/>
                     body - {value.body} <br/>
                 </div>)
             }

         </div>
     );
 }





