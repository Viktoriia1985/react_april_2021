import {MyContext} from "../index";


export default function C({x}) {

    return (
        <MyContext.Consumer>
            {
                ({name}) => {
                    return <div>{name}</div>;
                }
            }
        </MyContext.Consumer>
    );
}

