import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";

// basic concepts (flux, action, dispatch, reducer, context)
// counter example
// fetch data from json placeholder (last priority)

const SomeNestedChildComponent = () => {
    const counter = useSelector(({counterValue}) => counterValue);
    const posts = useSelector((state) => state.posts);
    console.log(counter, 'hello')

    // const dispatch = useDispatch();

    return (
        <header className="App-header">
            <h1>{counter}</h1>
            {/*<button onClick={() => {*/}
            {/*    dispatch({type: 'INC'})*/}
            {/*}}>inc</button>*/}


            <img src={logo} className="App-logo" alt="logo"/>
            {posts.map(post => (
                <div key={post.id}>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
            ))}
        </header>
    )
}

const SomeChildComponent = () => {
    return (
        <SomeNestedChildComponent/>
    )
}


export default function App() {
    const dispatch = useDispatch();

    const fetchPosts = async () => {
        // const data = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
                                              // OR
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch({
            type: 'SET_POSTS',
            payload: data,
        })

    }

    useEffect(() =>{
        fetchPosts();
    },[])

    return (
        <div className='App'>
            <button onClick={() => {
                dispatch({type: 'INC'})
            }}>inc</button>
            <SomeChildComponent/>
        </div>
    );
}

