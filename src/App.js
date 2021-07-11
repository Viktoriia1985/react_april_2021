import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import {createStore} from 'redux';

const initialState = {
    users: [],
    posts: [],
    comments: []
}
const setReduser = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_USERS': {
            return ({...state, users: action.payload});
        }
        case 'SET_POSTS': {
            return ({...state, posts: action.payload});
        }
        case 'SET_COMMENTS': {
            return ({...state, comments:action.payload});
        }
        default:
            return state;
    }
}

export const store = createStore(setReduser);

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/users'}>users page</Link><br/>
                <Link to={'/posts'}>posts page</Link><br/>
                <Link to={'/comments'}>comments page</Link>

                <Switch>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/posts'} component={Posts}/>
                    <Route path={'/comments'} component={Comments}/>
                </Switch>
            </div>
        </Router>
    );
}




