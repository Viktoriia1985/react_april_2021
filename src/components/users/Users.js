import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import User from "../user/User";
import {getUsers} from "../../services/API";

export default function Users() {
    const users = useSelector(({users}) => users);
    const dispatch = useDispatch();

    const fetchUsers = async () => {
        const {data} = await getUsers();
        dispatch({type: 'SET_USERS', payload: data})
    }

    useEffect(() => {
        fetchUsers()
    }, [])
    return (

        <div>
            {users.map(value => <User key={value.id} item={value}/>)}
        </div>
    )
}


