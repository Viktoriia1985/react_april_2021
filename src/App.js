import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";

// basic concepts (flux, action, dispatch, reducer, context)
// counter example
// fetch data from json placeholder (last priority)

const SomeNestedChildComponent = () => {
    const counter = useSelector(({counterValue}) => counterValue);
    console.log(counter, 'new result')

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
        <SomeNestedChildComponent/>
    )
}

export default function App() {
    const dispatch = useDispatch();

    return (
        <div className='App'>
            <div>
                <button onClick={() => {
                    dispatch({type: 'INC'})
                }}>inc
                </button>
            </div>

            <div>
                <button onClick={() => {
                    dispatch({type: 'DEC'})
                }}>dec
                </button>

            </div>

            <div>
                <button onClick={() => {
                    dispatch({type: 'RESET'})
                }}>reset
                </button>
            </div>

            <div>
                <button onClick={() => {

                    dispatch({type: 'INC_CUSTOM', payload: 3})
                }}>custom
                </button>
            </div>
            <SomeChildComponent/>
        </div>
    );
}
