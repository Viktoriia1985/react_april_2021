import A from "./components/A";
import {MyContext} from "./index";

export default function App() {
    const x = 'ho-ho';
    let y = {name: 'Hello OKten'};
    return (

        <MyContext.Provider value={y}>
            <div>

                <A x={x}/>

            </div>
        </MyContext.Provider>

    );
}



