import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";

// basic concepts (flux, action, dispatch, reducer, context)
// counter example
// fetch data from json placeholder (last priority)

const SomNestedChildComponent = () => {
    const counter = useSelector(({counterValue}) => counterValue);
    console.log(counter, 'hello')

    // const dispatch = useDispatch();

    return (
        <header className="App-header">
            <h1>{counter}</h1>
            {/*<button onClick={() => {*/}
            {/*    dispatch({type: 'INC'})*/}
            {/*}}>inc</button>*/}


            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    )
}

const SomeChildComponent = () => {
    return (
        <SomNestedChildComponent/>
    )
}


export default function App() {
    const dispatch = useDispatch();

    return (
        <div className='App'>
            <button onClick={() => {
                dispatch({type: 'INC'})
            }}>inc</button>
            <SomeChildComponent/>
        </div>
    );
}

