import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/API";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => setUsers(data))
    },[])

    return (
        <div>
            {
                users.map(u => <User key={u.id} item={u}/>)
            }


        </div>
    );
}
