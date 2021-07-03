import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

export default function UserDetails(props) {
     // let {match: {params: {id}}} = props;
    let {id} = useParams();
    // console.log(id);

    let [user,setUser] = useState({});
    useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/users/' + id)
                              .then(value => value.json())
                              .then(value => {
                                 setUser({...value})
                              });
     }, [id])

     return (
         <div>
             {
                 JSON.stringify(user)
             }
         </div>
     );
 }
 
 