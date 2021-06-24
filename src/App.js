 import {useState, useEffect} from 'react';
 import {getUsers} from "./services/API";

 export default function App() {

      let [users, setUsers] = useState([]);

      useEffect(() => {

          getUsers().then(response => {
              setUsers(response);
              console.log(response);
          });

      }, []);


     return (
         <div>


         </div>
     );
 }



